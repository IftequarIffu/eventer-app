## Things Learnt in this project

- To create the hover effect for links in the navbar, you can do something like `text-white/50 hover:text-white transition`. `text-white/50` means white color text with 50% opacity. **Check Navbar**
- `tracking-tight` classname of tailwind is used for titles on the main page. It makes it look much better
- Use `opacity-50` or `opacity-75` for sub headings. **Check Navbar**
- Mention the website theme colors in the tailwind config file and use them as `bg-primary` or `text-primary` etc.
- Use `usePathName()` hook to get the current path of the page. Eg: `/events/all`
- To fetch data, on client components, you need to write fetch code in a `useEffect` hook. But, if you want to the same
  on server components, make that component `async`, directly write the fetch API call code in the body of the component.
