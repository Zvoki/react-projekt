# React-Project Study Cheatsheet

## Entry Points

- **main.jsx**
  - Imports `React`, `createRoot`, global styles, `App`.
  - Wraps `<App />` in `<StrictMode>` and renders to `#root`.
  - Also imports Bootstrap CSS/JS.

- **App.jsx**
  - Sets up routing using `react-router-dom`.
  - Two main layouts:
    - `Layout` for user-facing pages.
    - `AdminLayout` for admin pages under `/admin`.
  - Routes:
    - `/` → `<Home />` inside `Layout`.
    - `/search` → `<Search />`.
    - `/products/:slug` → `<Product />`.
    - `/admin/products` → `<AdminList />`.
    - `/admin/products/new` → `<AdminNew />`.
  - Uses `<BrowserRouter>`, `<Routes>`, and nested `<Route>` elements.

## Core Components

- **Header.jsx**
  - Navigation bar with logo, search form, icons, and links.
  - Uses `useState` for query string and `useNavigate` to redirect on submit.

- **ProductCard.jsx**
  - Receives `product` prop and displays image, name, price.
  - Formats price via `formatPrice` util.
  - Wraps content in `<Link>` to `/products/${product.slug}`.

- **Layout / AdminLayout**
  - Common wrappers containing `<Outlet />` for nested routes.
  - Likely include header/footer or sidebar (not shown here).

## Pages

- **Home.jsx**
  - Loads popular products with `useEffect` on mount.
  - State `products` holds array; displayed with `.slice(0,8)`.
  - Renders `<Hero />`, `<Spots />`, and grid of `ProductCard`.

- **Product.jsx**
  - Reads `slug` via `useParams()`.
  - State `product` initially `null`.
  - Fetches `/products/${slug}` on mount/slug change.
  - Renders loading text if product not yet fetched.
  - Displays product details and maps `product.similar` to `ProductCard`s.

- **Search.jsx** (not read earlier, but similar pattern)
  - Uses `useLocation()` or query parameters to perform search.

## Utils

- **formatPrice.js**: appends `SEK` to number.
- **slugify.js**: lowercase, replace spaces with `-`, remove non-word characters.

## Server Controllers

- **productsController.js**
  - `popular(req,res)` returns top 8 products.
  - `productDetails(req,res)` returns product by slug; also fetches similar products by brand.
  - Makes use of `getPopularProducts()`, `getProductBySlug()`, `getSimilarProducts()` from DB queries.

- **searchController.js**
  - `search(req,res)` reads `q` query parameter and returns results from `searchProducts(q)`.

## Key Concepts for Exam

1. **React Hooks**: `useState` and `useEffect` patterns for data fetching.
2. **Routing**: Defining routes, nested routes, dynamic segments (`:slug`), navigation (`Link`, `useNavigate`).
3. **Data Fetching**:
   - `fetch` API + `res.json()` to parse.
   - Using async/await or promises.
4. **Rendering Lists**:
   - Using `.map()` to produce JSX.
   - Importance of `key` prop for performance.
5. **Component Communication**:
   - Props passing (e.g. passing `product` to `ProductCard`).
6. **State Management**:
   - Local component state vs passing props.
7. **Backend Flow**:
   - Route → controller → DB query → SQLite.
   - SQL placeholders (`?`) for safety.
   - Simple CRUD patterns.
8. **Utility Functions** (e.g. slugify, formatPrice).

## Sample Exam Questions

1. Explain how `useEffect` is used to fetch data when a component mounts. Give an example from this project.
2. Describe how React Router uses the `slug` parameter to display product details.
3. Why is the `key` prop required when rendering a list? What can go wrong if it's missing?
4. Write a simple `fetch` call that gets `/products/popular` and stores the result in state.
5. What does the `productDetails` controller function do? Outline its steps.
6. How does the server perform a search with a SQL `LIKE` query using user input safely?
7. Write the `slugify` function shown in the project and explain each transformation step.
