AFRAME.registerComponent('eggsound', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#sizzle');

        Context_AF.el.addEventListener('click', function(event){
            console.log("click");
           //creating sound for egg
            Context_AF.soundElem.components['sound'].playSound();
        });
    }
});