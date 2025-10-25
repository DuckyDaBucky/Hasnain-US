// Centralized social embed snippets (editable without touching components)
// Keep embeds as simple iframe HTML strings to allow SSR-friendly rendering.

export type SocialEmbeds = {
  linkedinWidget?: string; // e.g., an iframe HTML from a provider
};

export const socialEmbeds: SocialEmbeds = {
  // Example placeholder (leave undefined to show fallback):
  // linkedinWidget: "<iframe src='https://example.com/embed' width='100%' height='600' frameborder='0'></iframe>",
};


