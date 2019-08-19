let Groups = {
    render : async () => {
        let view = `
        <section class="groups" >     
        <h1> ESTOS SON MIS GRUPOS</h1>
          <div class="groups-container">
            <input class="fab fa-js" id="logo-js" type="checkbox" name="JavaScript" checked />
              <img src="img/javascript.png" class ="circ-size"></img>          
              <label for="comentarioTipo">JavaScrip</label>
          </div>
      </section>
        `;
        return view
    },
    after_render : async () => {}
};
export default Groups;