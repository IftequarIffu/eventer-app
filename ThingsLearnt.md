## Things Learnt in this project

- To create the hover effect for links in the navbar, you can do something like `text-white/50 hover:text-white transition`. `text-white/50` means white color text with 50% opacity. **Check Navbar**
- `tracking-tight` classname of tailwind is used for titles on the main page. It makes it look much better
- Use `opacity-50` or `opacity-75` for sub headings. **Check Navbar**
- Mention the website theme colors in the tailwind config file and use them as `bg-primary` or `text-primary` etc.
- Use `usePathName()` hook to get the current path of the page. Eg: `/events/all`
- To fetch data, on client components, you need to write fetch code in a `useEffect` hook. But, if you want to the same
  on server components, make that component `async`, directly write the fetch API call code in the body of the component.
- When using `<Image>` from Next.js with custom height, use object-fit. Eg: `<Image
  src={event.imageUrl}
  alt={event.name}
  height={280}
  width={500}
  className="h-[60%] object-fit"
/>`
- Tip: If you want to have an image, don't just have it in the app. Instead, have a blurred background of the same image
  and then have image over it. It makes the app looks much beautiful. To blur, see how it was done in `app/event/[slug]/page.tsx`
- Move your API calls from the Page(page.tsx) to Component(EventsList.tsx) for better user experience and this also allows
  us to use `<Suspense></Suspense>` for those components and other components on the page can be shown directly.
- If you make an API call twice on the same page, React sends only one API call. So, we need not worry about performance.
- When navigating from one page to another using pagination, the Loading page is not visible, because Loading is done only
  once. To show Loading for every page, add a `key` prop with unique value to the `<Suspense>` tag.
