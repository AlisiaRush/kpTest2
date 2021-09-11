function setTabs() {
    document.querySelectorAll(".tabs-button").forEach(li => {
        li.addEventListener('click', () =>{
           
            const tabsBar = li.parentElement;
            const tabsContent = tabsBar.parentElement;
            const tabNumber = li.dataset.forTab;
            const tabActivated = tabsContent.querySelector(`.tabs-content[data-tab="${tabNumber}"]`);

            document.querySelectorAll(".tabs-button").forEach(li => {
                li.classList.remove("tabs-button--active");
            });

            document.querySelectorAll(".tabs-content").forEach(tab => {
                tab.classList.remove("tabs-content--active");
            });
        
            li.classList.add("tabs-button--active");
            tabActivated.classList.add("tabs-content--active");
        });
    })
}
document.addEventListener('DOMContentLoaded', () =>{
    setTabs();

    document.querySelectorAll(".tabs").forEach(tabsContent =>{
        tabsContent.querySelector(".tabs-bar .tabs-button").click();
    });
});