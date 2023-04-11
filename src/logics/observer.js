export const observeElements = (dom) => {
    const observer = new IntersectionObserver((e) => {
        e.forEach(val => {
            if (val.isIntersecting && val.intersectionRatio >= 0.5) {
                val.target.style.color = 'red';
            }
        });
    })
    observer.observe(dom)
}; 
