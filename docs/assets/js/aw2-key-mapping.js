(function(){
  const keyMap={'F2':'Shift + W'};
  function loadSkills(){
    const aw2Skills = Array.from(document.querySelectorAll('[data-aw2-skill]'));
    aw2Skills.forEach(function(key){
      if(!key.hasAttribute("data-armory-embed")){
        const skillId = key.getAttribute('data-aw2-skill');
        key.classList.add("armory-inline");
        key.setAttribute('data-armory-ids',skillId);
        key.setAttribute('data-armory-size',"32");
        key.setAttribute('data-armory-embed',"skills");
      }
    });
  }
  loadSkills();
  function updateKeymaps(){
    const aw2Skills = Array.from(document.querySelectorAll('[data-aw2-key]'));
    aw2Skills.forEach(function(key){
      const k = key.getAttribute('data-aw2-key');
      if(keyMap[k]){
        key.setAttribute('data-aw2-key-mapped',keyMap[k])
      }else{
        key.removeAttribute('data-aw2-key-mapped');
      }
    });
  }
  updateKeymaps();
})();