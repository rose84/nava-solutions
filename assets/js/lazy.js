import LazyLoad from "vanilla-lazyload";

const lazyLoadOptions = {
  elements_selector: ".lazy",
  threshold: 500,
  class_loading: "loading",
  class_error: "error"
};
const pageLazyLoad = new LazyLoad(lazyLoadOptions);