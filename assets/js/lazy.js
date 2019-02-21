import LazyLoad from "vanilla-lazyload";

// Lazy Loader options
// see https://github.com/verlok/lazyload#-recipes
const lazyLoadOptions = {
  elements_selector: ".lazy",
  threshold: 500,
  class_loading: "loading",
  class_error: "error"
};

const pageLazyLoad = new LazyLoad(lazyLoadOptions);