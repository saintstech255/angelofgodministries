/* ============================================================
   MINISTRY CONFIGURATION — edit this file only.
   Leave a value "" until the ministry confirms it. Nothing is invented.
   ============================================================ */
window.AOG_CONFIG = {
  /* Contact details (all empty = placeholders are shown) */
  whatsapp: "",            // digits only with country code, e.g. "255XXXXXXXXX" -> enables WhatsApp flow for forms
  email: "",               // e.g. "info@example.org" -> used as mailto fallback when no WhatsApp number
  location: "",            // free text, e.g. "City, Tanzania"

  /* Channel & social links (full https:// URLs) */
  youtubeChannel: "",
  facebook: "",
  instagram: "",
  tiktok: "",

  /* YouTube videos from the ministry's VERIFIED channel.
     Add one object per video. category must be one of:
     growth, faith, prayer, kingdom, angels, living, bible
     Example:
     { id: "VIDEO_ID_11_CHARS", category: "faith", featured: true,
       title: { en: "English title", sw: "Kichwa cha Kiswahili" } }
  */
  videos: []
};
