
export let options = {
    root: null,
    rootMargin: "-20px"
    // threshold: 0.05
};

export const beTouching = (entries, ob, elementName) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (scrollSource.fromMenu && scrollSource.fromWhere === elementName) {
                scrollSource.fromMenu = false;
            }
            if (!scrollSource.fromMenu) {
                scroller.scrollTo(elementName)
            }
        }
    })
}