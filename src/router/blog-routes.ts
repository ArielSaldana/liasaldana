const pages = import.meta.glob('./pages/*.tsx', { eager: true }) as any
export function BlogRoutes(): [] {
    return Object.keys(pages).map((path) => {
        const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]
        return {
            name,
            path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
            // $ts-ignore
            component: pages[path].default as React.Component
        }
    }) as []
}