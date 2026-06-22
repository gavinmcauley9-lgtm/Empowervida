"use client";

/**
 * SEO Component — Legacy stub for backward compatibility.
 *
 * SEO metadata is handled by Next.js App Router via the `metadata` export
 * in each app/*/page.jsx file. This component renders structured data
 * (JSON-LD schema) only, since Next.js metadata doesn't handle that.
 *
 * DO NOT re-introduce react-helmet-async here — it requires a HelmetProvider
 * wrapper and is incompatible with Next.js App Router static export.
 * The June 10 build failures were caused by exactly that mistake.
 */
const SEO = ({
  schemaData = [],
}) => {
  // Only render JSON-LD structured data — everything else is handled
  // by Next.js metadata exports in each page.jsx file.
  const schemas = Array.isArray(schemaData) ? schemaData : [schemaData];

  if (schemas.length === 0 || schemas.every(s => !s)) return null;

  return (
    <>
      {schemas.map((schema, i) =>
        schema ? (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ) : null
      )}
    </>
  );
};

export default SEO;
