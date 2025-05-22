/* # Tabs
---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const tabContainers = document.querySelectorAll('.tabs-container');

    tabContainers.forEach(container => {
        const tabButtons = container.querySelectorAll('.tab-button');
        const tabPanes = container.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons and panes within this container
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // Add 'active' class to the clicked button and corresponding pane
                button.classList.add('active');
                const targetId = button.dataset.target;
                document.getElementById(targetId).classList.add('active');
            });
        });
    });
});