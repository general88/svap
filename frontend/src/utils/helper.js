export const baseUrlServer =
  process.env.NODE_ENV === "production"
    ? "https://dull-gold-coati-coat.cyclic.app"
    : "http://localhost:5000";
