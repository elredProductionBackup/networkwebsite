import FadeIn from "@/components/FadeIn";

// Matches either a markdown-style [label](url) link or a bare http(s) URL.
const LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s]+)/g;

function renderWithLinks(text) {
  const matches = [...text.matchAll(LINK_REGEX)];
  if (matches.length === 0) return text;

  const result = [];
  let lastIndex = 0;

  matches.forEach((match, index) => {
    const start = match.index;
    if (start > lastIndex) {
      result.push(text.slice(lastIndex, start));
    }

    const [fullMatch, markdownLabel, markdownUrl, bareUrl] = match;
    let url = markdownUrl ?? bareUrl;
    let label = markdownLabel ?? bareUrl;
    let trailing = "";

    if (!markdownUrl) {
      const trailingPunctuation = url.match(/[.,;:)\]]+$/);
      if (trailingPunctuation) {
        trailing = trailingPunctuation[0];
        url = url.slice(0, -trailing.length);
        label = url;
      }
    }

    const isExternal = /^https?:\/\//.test(url);

    result.push(
      <a
        key={index}
        href={url}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-red-600 underline hover:text-red-700"
      >
        {label}
      </a>,
    );
    if (trailing) result.push(trailing);

    lastIndex = start + fullMatch.length;
  });

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}

export default function LegalDocument({ eyebrow, data }) {
  const { title, lastUpdated, blocks } = data;

  return (
    <div className="relative w-full overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-3xl flex-col gap-10">
        <FadeIn className="flex flex-col items-start gap-3 text-left">
          <span className="text-xs font-bold tracking-wider text-red-600">
            {eyebrow}
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            {title}
          </h1>

          <p className="text-sm text-neutral-500">
            Last updated on: {lastUpdated}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {blocks.map((block, index) => {
            const key = `${block.type}-${index}`;

            if (block.type === "heading") {
              return (
                <h2
                  key={key}
                  className="mt-4 text-lg font-bold text-black sm:text-xl"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={key}
                  className="flex list-disc flex-col gap-2 pl-5 text-sm leading-7 text-neutral-600 sm:text-base"
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{renderWithLinks(item)}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                key={key}
                className="text-sm leading-7 text-neutral-600 sm:text-base"
              >
                {renderWithLinks(block.text)}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
