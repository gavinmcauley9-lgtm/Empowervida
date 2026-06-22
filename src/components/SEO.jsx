"use client";

// SEO Component - Legacy stub for backward compatibility.
// SEO metadata is handled by Next.js App Router via the metadata export
// in each page.jsx file. This component only renders JSON-LD structured data.
// DO NOT re-introduce react-helmet-async here - it crashes the Next.js build.
const SEO = ({
  schemaData = [],
}) => {
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
