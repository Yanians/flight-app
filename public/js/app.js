"use strict"

class App {

	constructor() {
		this.displays = [
		{
		  "id":1,
		  "photo":"images/1.jpg",
		  "destination":"DOHA QATAR",
		  "from":"Manila",
          "to":"ENGLAND",
		  "comments":"Always looking afast flight to day",
		  "contacts":"+639233477"   
      },

         {

		  "id":2,
		  "photo":"images/2.jpg",
		  "destination":"AUSTRALIA",
		  "from":"Singapor",
          "to":"EUROPE",
           "comments":"It is nice to go back Home.",
           "contacts":"+739246777" 
		  },	

		 {
		  "id":3,
		  "photo":"images/3.jpg",
		  "destination":"SAUDI ARABIA",
		  "from":"JAPAN",
          "to":"MAYANA ITALY",
          "comments":"I hope for a good weather thanks to GOD.",
          "contacts":"+759233000"
		}, 	

		 {
		  "id":4,
		  "photo":"images/5.jpg",
		  "destination":"MONGGOLIA",
		  "from":"KOREA",
          "to":"ESTADUS UNIDOS",
          "comments":"Please update me if it is Good weather.",
          "contacts":"+17923688"
		 },	

		{
			"id":5,
		  "photo":"images/4.jpg",
		  "destination":"CHINA",
		  "from":"Taiwan",
           "to":"DOHA QATAR",
           "comments":"I want an emediate schedule.",
           "contacts":"+639233477"
		   
		 },	

		{
			"id":6,
		  "photo":"images/11.jpeg",
		  "destination":"LOS ANGELES",
		  "from":"DUBAI",
           "to":"LONDON",
           "comments":"I hope for a very nice weather of my trip.",
           "contacts":"+639233477"
		 },	
      
         {
			"id":7,
		  "photo":"images/8.jpg",
		  "destination":"ITALY",
		  "from":"MOROCCO",
           "to":"SPAIN",
           "comments":"I hope for a very nice weather of my trip.",
           "contacts":"+639233477"
		   
		 },	

		 {
			"id":8,
		  "photo":"images/9.jpg",
		  "destination":"DUBAI",
		  "from":"TAIWAN",
           "to":"BRITAIN",
           "comments":"I hope for a very nice weather of my trip.",
           "contacts":"+639233477"
		   
		 }	
			];  

			this.airplain = [
		{
		  "id":1,
		  "route":"CHINA TO QATAR",
		  "origin":"MONGGOLIA",
          "photo":"images/a1.jpg",
          "description":"Eastern Flight from China to South America going back to origin.",
		  "comments":"Always looking afast flight to day" ,
		  "Content":[
					{   "Photo":"images/a1.jpg",
						"Capacity": "200 sheets",
						"Comfort": "High foam chair",
						"Personel": "Good service flight attendant",
						"Baggage": "maximum free",
						"Passage": "$9000.00",
						"Info": "Lead your way to going Home."
					} ]
       },
       {
		  "id":2,
		  "route":"QATAR TO AMERICA",
		  "origin":"DOHA QATAR",
          "photo":"images/a2.jpg",
          "description":"Qatar to Philippines time interval daily flight.",
		  "comments":"Always looking afast flight to day",
		   "Content":[
					{   "Photo":"images/a2.jpg",
						"Capacity": "240 sheets",
						"Comfort": "Good for family",
						"Personel": "your service concern/flight attendant",
						"Baggage": "Baggage free",
						"Passage": "$12000.00",
						"Info": "We find your ways Abroad."
					} ]   
       },
       {
		  "id":3,
		  "route":"DUBAI TO SINGAPOR",
		  "origin":"CHINA",
          "photo":"images/a3.jpg",
          "description":"Eastern flight from china to North America. time interval twice a week",
		  "comments":"Always looking afast flight to day",
		   "Content":[
					{    "Photo":"images/a3.jpg",
						"Capacity": "300 sheets",
						"Comfort": "W/magazine that suit your likes",
						"Personel": "w/ brilliant flight Attendant",
						"Baggage": "minimum 4500 pds/ Baggage",
						"Passage": "$3000.00",
						"Info": "Keep in touch with us."
					} ]   
       },
       {
		  "id":4,
		  "route":"SAUDI TO PHILIPPINES",
		  "origin":"WESTERN COUNTRY",
          "photo":"images/a4.jpg",
          "description":"Western flight to Ecuador time interval twice a week.",
		  "comments":"Always looking afast flight to day",
		   "Content":[
					{    "Photo":"images/a4.jpg",
						"Capacity": "140 sheets",
						"Comfort": "W/ satellite cable TV",
						"Personel": "At your service 24/7",
						"Baggage": "maximum capacity 5000 pds",
						"Passage": "$18000.00",
						"Info": "Your flight, our Journey."
					} ]   
       },
       {
		  "id":5,
		  "route":"COLUMBIA TO ECUADOR",
		  "origin":"SPAIN",
          "photo":"images/a5.jpg",
          "description":"North America going back to Origin.",
		  "comments":"Always looking afast flight to day",
		   "Content":[
					{    "Photo":"images/a5.jpg",
						"Capacity": "2000 sheets",
						"Comfort": "W/live camera",
						"Personel": "w/ brilliant flight Attendant",
						"Baggage": "Baggage free",
						"Passage": "$3000.00",
						"Info": "Make your flight feel at Home."
					} ]   
       },
       {
		  "id":6,
		  "route":"MALAYSIA TO EUROPE",
		  "origin":"PACIFIC ASIA",
          "photo":"images/a120.jpg",
          "description":"Columbia Flight going back to Origin.",
		  "comments":"Always looking afast flight to day",
		   "Content":[
					{
						 "Photo":"images/a120.jpg",
						"Capacity": "200 sheets",
						"Comfort": "W/ comfortable foam onboard.",
						"Personel": "w/ Good service Personel/flight attendant",
						"Baggage": "Baggage free",
						"Passage": "$8000.00",
						"Info": "Keep you safe till you Home."
					} ]   
       },
       {
		  "id":7,
		  "route":"AFGHANISTAN TO RUSSIA",
		  "origin":"JERUSALEM",
          "photo":"images/a7.jpg",
          "description":"Central Egypt Government, internatinal. going back to Origin.",
		  "comments":"Always looking as fast flight to day",
		   "Content":[
					{
						 "Photo":"images/a7.jpg",
						"Capacity": "180 sheets",
						"Comfort": "W/live camera",
						"Personel": "Full service concern.",
						"Baggage": "5000 pds available",
						"Passage": "$3000.00",
						"Info": "We will make your flight feel at Home."
					} ]   
       },
       {
		  "id":8,
		  "route":"BRAZIL TO EUROGUAY",
		  "origin":"PAPUA NEW GUINEA",
          "photo":"images/a8.jpg",
          "description":"South America to Atlantic Country going back to Origin.Time interval trice a week.",
		  "comments":"Always looking afast flight to day",
		   "Content":[
					{
						"Photo":"images/b4.png",
						"Capacity": "250 sheets",
						"Comfort": "W/ live camera in Open Games",
						"Personel": "w/ brilliant flight Attendant",
						"Baggage": "Baggage free",
						"Passage": "$12000.00",
						"Info": "Flight Anywhere in the World."
					} ]   
       }

   
    ];

       this.state = [
			{
				"bind": {
					"content_plain":[],
					"pass_id":[],
					"pass_photo":[],
					"pass_dest":[],
					"pass_from":[],
					"pass_comm":[],
					"pass_con":[]
					
				}
			}
		];

    }
  
	render(html, component){
		component.innerHTML += html;
	}

	reRender(html, component){
		component.innerHTML = html;
	}

    createFlight() {
				
				let id = document.getElementById('id');
				let photo = document.getElementById('photo');
				let destination = document.getElementById('destination');
				let from = document.getElementById('from');
				let to = document.getElementById('to');
				let comments = document.getElementById('comments');
				let contacts = document.getElementById('contacts');
                

		       //        let accessflight=[];
		       //    for(let i=0;i<this.state[0].bind.plain_type.length;i++){
			      //      accessflight.push({
				     //      "plainphoto" : this.state[0].bind.plain_type[i],
				     //      "description" : this.state[0].bind.plain_desc[i]
			      // });
		       //  }

		       //   let nameOfPlaine = accessflight; 
		       //   let thiscontentplaine = []; 
		       //   for(let i=0;i<this.state[0].bind.content_plain.length;i++){
		       //   	thiscontentplaine.push(this.state[0].bind.content_plain[i]);
		       //   }

		       //   let variableplain = thiscontentplaine;

		 		 let displays = {
                 "id":id.value,
                 "photo":photo.value,
                 "destination":destination.value,
                 "from":from.value,
                 "to":to.value,
                 "comments":comments.value,
                 "contacts":contacts.value
                 // "plainName":nameOfPlaine, 
                 
                 
               };

               this.displays.push(displays);
              //  this.state[0].bind.content_plain = this.state[0].bind.plain_type = this.state[0].bind.plain_desc = [];
		       id.value = photo.value = destination.value = from.value = to.value = comments.value = contacts.value = '';
		       this.passView();
    } // end of create



	deleteAirPlaine(key){
		let r = this.displays;
		for(let i=0;i<r.length;i++){
			if(r[i].id === key){
				this.displays.splice(i,1);
				break;
			}
		}		
		this.passView();
	}

	findAirPlaneByID(id){
		let r = this.displays;
		let count = 0;
		for(let i=0;i<r.length;i++){
			if(id===r[i].id){
				return r[i];
			}
			 
		}
	}	

	findID(id){
		let r = this.airplain;
		let count = 0;
		for(let i=0;i<r.length;i++){
			if(id===r[i].id){
				return r[i];
			}
			
		}
	}	

	bindPlainNewData(val,id,obj){
		let bind = null;
		if(obj === "plainphoto"){
			bind = this.state[0].bind.plain_type;
		}
		else if(obj === "description"){
			bind = this.state[0].bind.plain_desc;
		}
		bind[id] = val;
		 console.log(bind);
	}	
         
	findAirPlaneByDestination(destination){  //use for search...
		let objects = [];
		let r = this.displays;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].destination.toUpperCase().indexOf(destination.toUpperCase()) > -1);
			 console.log(destination," vs ",r[i].destination," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}


	bindAirPlaneNewContentplain(val,id){

		let bind = this.state[0].bind.procedures;
		bind[id] = val;
		console.log(bind);
	}
       
  bindAirPlaneNewplainName(val,id,obj){
		let bind = null;
		if(obj === "plainphoto"){
			bind = this.state[0].bind.plain_type;
		}
		else if(obj === "description"){
			bind = this.state[0].bind.plain_desc;
		}
		bind[id] = val;

		console.log(bind);
	}	

	   updateDetails(key){
  
    let id = document.getElementById('id');
    let photo = document.getElementById('photo');
    let destination = document.getElementById('dest');
    let from = document.getElementById('from');
    let to = document.getElementById('to');
    let comments = document.getElementById('comments');
    let contacts = document.getElementById('contacts');
 
    let m = this.displays[key];
    let display = {"id":m.id, "photo":m.photo, "destination":destination.value, "from":from.value, "to":to.value, "comments":comments.value, "contacts":contacts.value};
             
    this.displays[key] = display;
    let details = document.getElementById('passView');
    details.innerHTML = "";
    this.passView();  
   
	  }	

} //end of app

							class Component extends App {

								constructor(){
									super();
								}
								//<i class="small material-icons left"> <img src="images/b4.png"/> //store class //supervisor_account

    layOut(){

 let html = `      
       <div id="airLayOut">
	<nav>
    <div class="nav-wrapper blue lighten-100 z-depth-600">
    <ul class="left brand-logo">
    <li><a href="#formCreate" onclick="component.displayStarter()"><i class="large material-icons left">store</i>HOME</a></li>
    </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="#displayParalax" onclick="component.displayParalax()" style="margin-left:2px;"><img src="images/pi.png" class="triangle responsive-img" style="border-radius:10em; width:20px; height:17px;">Flight</a></li>
        <li><a href="#formCreate" onclick="component.formCreate()"><i class=" small material-icons left">class</i>take your flight</a></li>
        <li><a href="#passView" onclick="component.passView()"><i class="small material-icons left">supervisor_account</i>People on Board</a></li>
      </ul>
    </div>
  </nav>
       
              <div id="displayStarter"></div>
              <div id="displayParalax"></div>
              <div id="formCreate"></div>
              <div id="passView"></div>
              <div id="plainView"></div>
               <div id="updatePlane"></div>
               <div id="plainDetail"></div>
              
           
  <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">ABOUTS US</h5>
                <p class="grey-text text-lighten-4"><a href="http://www.jetstar.com/ph/en/help/articles/when-to-get-to-the-airport-for-international-flights"/>Tour yourself around the world.</p>
                 <div class="row">
				      <div class="col s3"><a href="#showStarter" onclick="component.displayStarter()">HOME</div>
				      <div class="col s3"><a href="#showForm" onclick="component.formCreate()">RESERVED YOUR Flight</div>
				      <div class="col s3"><a href="#passView" onclick="component.passView()">PEOPLE ON YOUR FLIGHT</div>
				    </div>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">FOLLOW</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/?stype=lo&jlou=Affd_zmu0oQ34q2V00SweCI3MTqjhpWR7h4pvXnIej55iR-PTzolfoafz401D9kLREuUaBLRehuRUOT0l6ILIZyfM-xuDF2VAxaBE95wisXBCA&smuh=39032&lh=Ac8PoaDK_BMt0cWr"><img src="images/logof.png">SHARE </a></li>
                  <li><a class="grey-text text-lighten-3" href="http://www.youtube.com"><img src="images/logoy.png">SHARE</a></li>
                  <li><a class="grey-text text-lighten-3" href="http://www.google.com"><img src="images/gogol.png">SHARE </a></li>
                  
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <div class="container">
            <div class="row">© 2016 2017  Web - Developer Design @Adlawan
             <div class="col 1 offset-2 s1">
             <img src="images/home.jpg" class="none">
              </div>
                <div class="col 1 offset-1 s1">
                     <img src="images/home2.jpg" class="none">
                     </div>      
                        <div class="col 1 offset-1 s1">      
                           <img src="images/home3.jpg" class="none">
                           </div>
                              <div class="col 1 offset-0 s1">      
                                <img src="images/home4.jpg" class="none">
                                </div>
                                   <div class="col 1 offset-0 s1">      
                                     <img src="images/home5.png" class="none">
                                     </div>
            <a class="grey-text text-lighten-4 right" href="http://www.jetstar.com/ph/en/help/articles/when-to-get-to-the-airport-for-international-flights">FLIGHT HISTORY AROUND THE WORLD</a>
            </div>
          </div>
        </footer></div>
           </div>
         </div>
    		`;
    	this.reRender(`
    	${html}`	  
    		,document.getElementById("app"));
    	this.displayStarter();

    }

   
	nameSearch(destination){ // use for Search
		let html = ``;
		let r = this.findAirPlaneByDestination(destination);
		for(let i=0;i<r.length;i++){

			html +=`<div class="col s12 m3">
			         <i class="header"><b>${r[i].destination}</b></i>
			                 <div class="card">
			      <div class="card-image" col s4 m6>
			        <img src="${r[i].photo}" class="imgParalax">
			           </div>
			      <div class="card-stacked">
			        <div class="card-content">
			         <ul><li><h6>From:&nbsp&nbsp${r[i].from}</h6></li>
                      <li><span href="#" onclick="component.plainView(${r[i].id})" class="new badge small green" data-badge-caption="">Detail</span></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			 </div>
			`;
		}	

		this.reRender(`
			${html}
			`,document.getElementById("nameSearch"));	

		$('#passView').show();	
	}
       passView(){
      let  html = `<iframe src="charity.html"></iframe>`;
            html += `<nav>
                        <div class="nav-wrapper">
                           <form class="form">
						<div class="input-field">
							<input onkeyup="component.nameSearch(this.value)" id="search" type="search" placeholder="Search" required/>
	                         <label for="search"><i class="material-icons center-align">search</i></label>
	                         <i class="material-icons">close</i>
						</div>
						</form>
					</div>	
				   </nav>		
			        `;
			html += `<div class="row card-panel grey lighten-500 z-depth-1000 hoverable" style="border-radius:5px;" id="nameSearch">`;
            html += `
			        <h3 class="center-align">List of Destination</h3>
            `;
             html +=`<div class="row card-panel grey lighten-500 z-depth-1000 hoverable" style="border-radius:5px;">`;
		   let r = this.displays;
		   let count = 0;
		     for(let i = 0;i<r.length; i++){
			if(count++ === r[i])break;
			    console.log(r[i]);
			html+= `    	     
			            <div class="col s12 m3">
			         <i class="header"><b>${r[i].destination}</b></i>
			                 <div class="card">
			      <div class="card-image" col s4 m6>
			        <img src="${r[i].photo}" class="imgParalax">
			           </div>
			      <div class="card-stacked">
			        <div class="card-content">
			         <ul><li><h6>From:&nbsp&nbsp${r[i].from}</h6></li>
                      <li><span href="#plainView" onclick="component.plainView(${r[i].id})" class="new badge small green" data-badge-caption="">Detail</span></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			 </div>
          `;         
      }   
 
        html += `</div>`;
 
            this.reRender(`
		         ${html}
		                `,document.getElementById("passView"));
	                   this.showPassView();
	                   this.plainView;
      }

         plainView(id) {
        
           let  r = this.findAirPlaneByID(id);
         
         	 let  html = `		  
                    <div class="col s6 m4 offset-m2 6 offset-l3">
				        <div class="card-panel brown lighten-300 z-depth-400">
				          <div class="row valign-wrapper">
				            <div class="col s2  m2 offset-m1 6 offset-13">
				            <img src="${r.photo}" class="triangle responsive-img" style="border-radius: 80em;">
				            </div> 
				            <div class="col s10">
				            <h5>Destination</h5>
                              <span class="black-text"><h2>${r.destination}</h2></span>	
				            </div>
				          </div>
                  <div class="col s12 m2 offset-m1 6 offset-13">
			      <p class="brown lighten-300 z-depth-400" style="center-align"></p>
			      </div>                     
         	       <ul class="collection with-header">
			        <li class="collection-item"><h5>From: &nbsp&nbsp${r.from}</h5></li>
			        <li class="collection-item"><h5>To: &nbsp&nbsp${r.to}</li>
			        <li class="collection-item"><h5>Contacts: &nbsp&nbsp${r.contacts}</li>
			        <li class="collection-item"><h5>Comments: &nbsp&nbsp${r.comments}</li>
			      </ul>
			      <div class="card-action small">
			      <span onclick="component.updatePlane(${r.id})" class="new badge small green" data-badge-caption="">Change</span>
			      <span onclick="component.deleteAirPlaine(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>								
				    <span onclick="component.passView(${r.id})" class="new badge small" data-badge-caption="">GO BACK</span>
				  </div>
				  </br>			      
			       `;    
                  this.reRender(`${html}`,document.getElementById("plainView"));
                  this.showPlainView();
                  //this.passView();
         }
//<i class=" small material-icons left">perm_identity</i> photo,forward_des,room,trending_flat,phone,comments
	formCreate() {

	let html = `		
    <form class="col s6" id="now" method="" onsubmit="component.createFlight(); return false;" action="component.passView(); return false;" >
          <div class="row">
          <div class="center-align">
        <div class="input-field col s12">
          <input value="${this.displays.length+1}" id="id" type="text" class="validate">
          <label for="id"></label>
        </div>
      </div>
            </br></br>
        <div class="input-field col s5 offset-m1 6 offset-13">
        <i class=" small material-icons prefix">photo</i>
        <input  id="photo" type="text" class="validate" required>
         <label for="photo" data-error="wrong" data-success="right">Link your image</label>
        </div>

        <div class="input-field col s4 offset-m1 6 offset-13">
        <i class=" small material-icons prefix">forward_des</i>
          <input id="destination" type="text" class="validate" required>
          <label for="destination" data-error="wrong" data-success="right">Destination Address</label>
        </div>
       
         <div class="row">
        <div class="input-field col s5 offset-m1 6 offset-13">
        <i class=" small material-icons prefix">room</i>
          <input  id="from" type="text" class="validate">
          <label for="from">From</label>
        </div>
        <div class="input-field col s4 offset-m1 6 offset-13">
        <i class=" small material-icons prefix">trending_flat</i>
          <input id="to" type="text" class="validate" required>
          <label for="to" data-error="wrong" data-success="right">To:</label>
        </div>
      </div>
         <div class="row">
        <div class="input-field col s5 offset-m1 6 offset-13">
        <i class=" small material-icons prefix">phone</i>
          <input id="contacts" type="text" class="validate" required>
          <label for="contacts" data-error="wrong" data-success="right">Contact Details</label>
        </div>
      </div>  
       <div class="input-field col s5 offset-m1 6 offset-13">
       <i class=" small material-icons prefix">comments</i>
       <textarea id="comments" class="textarea-field" required></textarea>
       <label for="comments" data-error="wrong" data-success="right">&nbsp;<p>Leave comments here.</center>
        </div>             
        <div class="input-field col s4">
              <center><button type="submit" class="btn waves-effect waves-light">Save</button></center>
		    </div>
    </form>
  </div>
        
		`;
          this.reRender(`
			${html}
			`,document.getElementById("formCreate"));  
              this.showForm();
        //       this.state[0].bind.content_plain = [];		
		      // this.state[0].bind.plain_type = [];		
		      // this.state[0].bind.plain_desc = [];	
       }

         displayStarter(){
 
           let html = `

           <div class="slider">
    <ul class="slides">
      <li>
        <img src="images/a2.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>FLIGHT YOUR HOME ANYWHERE.</h3>   
        </div>
      </li>
      <li>
        <img src="images/a3.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>ACCESS!</h3>
        </div>
      </li>
      <li>
        <img src="images/aa.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h2 class="light grey-text text-lighten-2">FLY HIGH</h5>
        </div>
      </li>
       <li>
        <img src="images/a6.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h3 class="light red-text text-lighten-900">QATAR AIRWAYS</h3>
        </div>
      </li>
      <li>
        <img src="images/a4.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>ON BOARD NOW!</h3>
          
        </div>
      </li>
    </ul>
  </div>

</div>  
        
  `;              
       this.reRender(`
			${html}
			`,document.getElementById("displayStarter")); 
			this.showStarter(); 
}

	  displayParalax(){
			        
		let html = `
			<h4 class="center-align black lighten-500 z-depth-1000">Flight Your Home Anywhere</h4>
			<div class="row card-panel grey lighten-500 z-depth-1000 hoverable" style="border-radius:5px;">
		`;
     // html += `<div class="card-panel blue lighten-30 z-depth-200">`;
        let r = this.airplain;
        let count = 0;
        for(let i=(r.length-1);i>=0;i--){

        	if(count++ === 8)
        		break;
			 html += `
			<div class="col s10 m80 offset-m1 1 offset-1">     
             <div class="card-panel brown lighten-1000 z-depth-10 hoverable">
               <div class="row valign-wrapper">

            <div class="col s900 m100 0ffset-m100 400 offset-400">
              <img src="${r[i].photo}" alt="" class="triangle responsive-img">
            </div>

            <div class="col s10">
              <span class="black-text">${r[i].description}
              </span>
            </div>

            <div class="col s10">
                <span onclick="component.plainDetail(${r[i].id})" class="new badge small green" data-badge-caption="">VIEW PLAIN</span>
                </div>
          </div>
        </div>
      </div> 
      `;
    }        
		    this.reRender(`
				${html}
			`,document.getElementById("displayParalax")); 
		  this.showParalax();
        
}

        plainDetail(id){
            let r = this.findID(id);
            
            //grade
         	let html = `
                   <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${r.photo}" style="height:400px;">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${r.route}<i class="material-icons right">more_vert</i></span>
      <p><a href="#" onclick="component.displayParalax()">PLAIN</a></p>
    </div>
    <div class="card-reveal brown lighten-300 z-depth-400" >
      <span class="card-title grey-text text-darken-4"><i><b>${r.route}</b></i><i class="material-icons right">close</i></span>
       `;

       for(let i=0;i<r.Content.length;i++){
			let ri = r.Content[i];
			 html +=`
      <ul class="collection">
      <li class="collection-item avatar">
      <img src="${ri.Photo}" alt="" class="circle">
      <span class="title">${ri.Info}</span>
      <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
    </li>
        </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <p>Capacity: ${ri.Capacity}<br>
         ${ri.Comfort}
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">insert_chart</i>
      <p>${ri.Personel}<br>
          ${ri.Baggage}
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
    </li>

    <li class="collection-item avatar">
      <i class="material-icons circle">play_arrow</i>
      <p><br>
       Passage:   ${ri.Passage}
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
    </li>
  </ul>
    `;
 }
 
   html +=`
     
     <div class="card-action small">
		 <span onclick="component.formCreate()" class="left new badge small green" data-badge-caption="">On board!</span>
		 <span onclick="component.displayParalax()" class=" left new badge small red" data-badge-caption="">PLAIN HOME</span>								
		 <span onclick="component.passView()" class=" left new badge small" data-badge-caption="">Search People</span>
	 </div>   
    </div>
  </div>
        `;  
          this.reRender(`${html}`,document.getElementById("plainDetail"));
                  this.showPlainDetail();
    }

    
     updatePlane(id){
	  id = id -1;                       //forward_des,room,trending_flat,mode_edit,phone
     let  html =`
  
 <div class="container-fixed">
    <form class="col s1" id="contactform" method=""  onsubmit="component.updateDetails(${id}); return false;" action="component.updateDetails(${id})">
         <fieldset>
             <div class="row">
             <div class="col s3 offset-m0 2 offset-60">
				<img src="${this.displays[id].photo}" class="triangle responsive-img"></label></center>
				</div></br></br>
            <div class="input-field col s6 offset-m1 6 offset-13">
            <i class=" small material-icons prefix">forward_des</i>
                <input id="dest" type="text" value="${this.displays[id].destination}" class="form-control" required autofocus>
                <label for="dest" data-error="wrong" data-success="right">Change Destination</label>
            </div>
            <div class="input-field col s6 offset-m4 6 offset-10">
            <i class=" small material-icons prefix">room</i>
                <input id="from" name="from" type="text" value="${this.displays[id].from}" class="form-control" required autofocus>
                <label for="from" data-error="wrong" data-success="right">Change origin</label>
            </div>
            <div class="input-field col s6 offset-m4 6 offset-13">
            <i class=" small material-icons prefix">trending_flat</i>
                <input id="to" name="to" type="text" value="${this.displays[id].to}" class="form-control" required autofocus>
                <label for="to" data-error="wrong" data-success="right">Change ongoing</label>
            </div>
               </div>
             <div class="row">
            <div class="input-field col s6 offset-m4 6 offset-13">
              <i class="small material-icons prefix">mode_edit</i>
                <input id="comments" name="comments" type="text" value="${this.displays[id].comments}" class="form-control" required autofocus>
                <label for="comme  nts" data-error="wrong" data-success="right">Comments</label>
            </div>        
            <div class="input-field col s6 offset-m4 6 offset-13">
             <i class=" small material-icons prefix">phone</i>
                <input id="contacts" name="contacts" type="text" value="${this.displays[id].contacts}" class="form-control"
                 required>
                <label for="contacts" data-error="wrong" data-success="right">Contact Details</label>
            </div>
            <div class="input-field col s6 offset-m4 6 offset-30">
             <button type="submit" class="btn btn-lg btn-primary btn-block"/>UPDATE<?button>
            </div>

          </div>  
        </div>            
     </fieldset>               
    </form>
  </div>
  `;    
this.reRender(`

  ${html}

  `,document.getElementById("updatePlane"));   
this.showUpdatePlane();
}

		showStarter() {
		$('#displayStarter').show();
		$('#displayParalax').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#plainView').hide();
		$('#updateFlight').hide();
		$('#plainDetail').hide();
	  $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
		}

        showForm() {
		$('#formCreate').show();
		$('#displayStarter').hide();
		$('#displayParalax').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#plainView').hide();
	    $('#updateFlight').hide();
	    $('#plainDetail').hide();
		}

		showParalax(){
		$('#displayParalax').show();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
        $('#parallax').hide();
        $('#plainView').hide();
        $('#updateFlight').hide();
        $('#plainDetail').hide();	
	}

		showPassView(){
	    $('#passView').show();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#plainView').hide();
		$('#updatePlane').hide();
		$('#updateFlight').hide();
		$('#plainDetail').hide();
    }       

       showPlainView(){
	    $('#plainView').show();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#updateFlight').hide();
		$('#plainDetail').hide();
    }      

showUpdatePlane(){
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').show();
		$('#plainDetail').hide();
}

       showEdit(){
       	$('#Edit').show();
       	$('#updateFlight').hide();
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#updatePlane').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#plainDetail').hide();
   }


       showNameSearch(){
       	$('#nameSearch').show();
       	$('#Edit').hide();
       	$('#updateFlight').hide();
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#updatePlane').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').show();
		$('#plainDetail').hide();
    } 
		showPlainDetail(){
	    $('#plainDetail').show();
       	$('#nameSearch').hide();
       	$('#updateFlight').hide();
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#updatePlane').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
     }
  
} 
let component = new Component();
    component.layOut();
    

        