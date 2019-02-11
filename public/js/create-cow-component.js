AFRAME.registerComponent('create-cow-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        //creating cow on click respond
        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createCow();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    createCow : function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        let cowElem = document.createElement('a-entity');
        cowElem.setAttribute('obj-model', {obj:'/assets/models/Cow.obj'});
        cowElem.setAttribute('material', {src:'/assets/textures/Cow.png'});
        cowElem.setAttribute('remove-component', {}); 
     //controling position and scale of cow
        cowElem.setAttribute('position', {x:-4, y:-4, z:-18});
        cowElem.setAttribute('scale', {x:0.01, y:0.01, z:0.01});
    //getting click of mouse to respond
        cowElem.setAttribute('cursor');
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(cowElem);
    }
});