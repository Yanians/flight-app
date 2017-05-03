"use strict"


class App {

	constructor() {
		this.displays = [
		{
		  "id":1,
		  "photo":"images/2.jpg",
		  "destination":"DOHA QATAR",
		  "from":"Manila",
          "to":"ENGLAND",
          "contacts":"+639233477",
          /*"plainName":[
           {
          	"plainphoto":"http://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
          	"description":"Qatar Airways’ Al Darb Qatarisation Programme is an initiative that brings young Qataris to develop themselves and their country through the national airline."          
		  },

		   { 
		   	"plainphoto":"http://www.laineygossip.com/Content/images/articles/world-cup-12jun14-01.jpg",
		   	"description":"Before leaving this beautiful country, make sure that you have not missed the many landmarks and activities to do in Italy. Tour the Colosseum, Pantheon or Roman Forum and immerse yourself in its long history. Visit the Florence Cathedral or St. Peter’s Basilica and wonder at its ornate architecture. Take that cliché photo of yourself supporting the Leaning Tower of Pisa and make a wish at the Trevi Fountain. Those are just a few of the more popular tourist spots in Italy."
		   },

		   { 
		   	"plainphoto":"http://i4.manchestereveningnews.co.uk/incoming/article7206345.ece/ALTERNATES/s615/JS36565250.jpg",
            "description":"A plane flying from Manchester Airport to Washington was met by emergency crews when it diverted to Dublin.United Airlines flight UA101 was en route from Manchester to Washington on Sunday afternoon, with 155 passengers and nine crew on board."
		   },

		   { 
		   	"plainphoto":"http://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
          	"description":"Qatar Airways’ Al Darb Qatarisation Programme is an initiative that brings young Qataris to develop themselves and their country through the national airline."          
		   },

		   { 
		   	"plainphoto":"http://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
          	"description":"Qatar Airways’ Al Darb Qatarisation Programme is an initiative that brings young Qataris to develop themselves and their country through the national airline."          
		   },

		   { 
		   	"plainphoto":"http://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
          	"description":"Qatar Airways’ Al Darb Qatarisation Programme is an initiative that brings young Qataris to develop themselves and their country through the national airline."          
		   },

		   { 
		   	"plainphoto":"http://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
          	"description":"Qatar Airways’ Al Darb Qatarisation Programme is an initiative that brings young Qataris to develop themselves and their country through the national airline."          
		   }
		], */
		"comments":"Always looking afast flight to day"   
      },

         {

		  "id":2,
		  "photo":"images/1.jpg",
		  "destination":"Sydney-Bundaberg flights",
		  "from":"Singapor",
          "to":"EUROPE",
          "contacts":"+739246777",
           "comments":"It is nice to go back Home." 
		  },	

		 {
		  "id":3,
		  "photo":"images/3.jpg",
		  "destination":"SAUDI ARABIA",
		  "from":"Japan",
          "to":"MAYANA ITALY",
          "contacts":"+759233000",
          "comments":"I hope for a good weather thanks to GOD."
		}, 	

		 {
		  "id":4,
		  "photo":"images/5.jpg",
		  "destination":"MONGGOLIA",
		  "from":"Manila",
          "to":"ESTADUS UNIDOS",
          "contacts":"+17923688",
          "comments":"Please update me if it is Good weather."
		 },	

		{
			"id":5,
		  "photo":"images/4.jpg",
		  "destination":"CHINA",
		  "from":"Taiwan",
           "to":"DOHA QATAR",
            "contacts":"+639233477",
           "comments":"I want an emediate schedule."
		   
		 }	
   /*
		{
			"id":6,
		  "photo":"https://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
		  "destination:":"ALLEH ELLAH, QATAR",
		  "from":"Manila",
           "to":"DOHA QATAR",
            "contacts":"+449232277",
           "comments":"I want an emediate schedule."
		   
		 },	

		 {
			"id":7,
		  "photo":"https://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
		  "destination:":"ALLEH ELLAH, QATAR",
		  "from":"Manila",
           "to":"DOHA QATAR",
            "contacts":"+229342377",
           "comments":"I want an emediate schedule."
		   
		 },	

		 {
			"id":8,
		  "photo":"https://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
		  "destination:":"ALLEH ELLAH, QATAR",
		  "from":"Manila",
           "to":"DOHA QATAR",
            "contacts":"+639282311",
           "comments":"I want an emediate schedule."
		   
		 },	

		 {
			"id":9,
		  "photo":"https://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
		  "destination:":"ALLEH ELLAH, QATAR",
		  "from":"Manila",
           "to":"DOHA QATAR",
           "contacts":"+637889001",
           "comments":"I want an emediate schedule."
		   
		 },	

		{
			"id":10,
		  "photo":"https://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
		  "destination:":"ALLEH ELLAH, QATAR",
		  "from":"Manila",
           "to":"DOHA QATAR",
            "contacts":"+639233482",
           "comments":"I want an emediate schedule."
		   
		 },	
        {
			"id":11,
		  "photo":"https://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
		  "destination:":"ALLEH ELLAH, QATAR",
		  "from":"Manila",
           "to":"DOHA QATAR",
            "contacts":"+6392334321",
           "comments":"I want an emediate schedule."
		   
		 },	

		{
			"id":12,
		  "photo":"https://pbs.twimg.com/profile_images/787024135847288832/AtB2lwSV_200x200.jpg",
		  "destination:":"ALLEH ELLAH, QATAR",
		  "from":"Manila",
           "to":"DOHA QATAR",
           "contacts":"+639233477",
           "comments":"I want an emediate schedule."
		   
		 }    */
			];  

       this.state = [
			{
				"bind": {
					"content_plain":[],
					"plain_type":[],
					"plain_desc":[]
					
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
				let contacts = document.getElementById('contacts');
				let comments = document.getElementById('comments');

		              let accessflight=[];
		          for(let i=0;i<this.state[0].bind.plain_type.length;i++){
			           accessflight.push({
				          "plainphoto" : this.state[0].bind.plain_type[i],
				          "description" : this.state[0].bind.plain_desc[i]
			      });
		        }
		         let nameOfPlaine = accessflight; 

		         let thiscontentplaine = []; 
		         for(let i=0;i<this.state[0].bind.content_plain.length;i++){
		         	thiscontentplaine.push(this.state[0].bind.content_plain[i]);
		         }

		         let variableplain = thiscontentplaine;

		 		 let display = {
                 "id":id.value,
                 "photo":photo.value,
                 "destination":destination.value,
                 "from":from.value,
                 "to":to.value,
                 "contacts":contacts.value,
                 "plainName":nameOfPlaine.value, 
                 "comments":comments.value
                 
               };

               this.displays.push(display);
                this.state[0].bind.content_plain = this.state[0].bind.plain_type = this.state[0].bind.plain_desc = [];
		       id.value = photo.value = destination.value = from.value = to.value = contacts.value = comments.value = '';
    } // end of create



	deleteAirPlaine(key){
		let r = this.displays;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.displays.splice(i,1);
				break;
			}
		}		
		this.passView();
	}

	findAirPlaneByID(id){
		let r = this.displays;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}	

	// updatePlaneRes(id){

	// id = id+1;
	// let flightdummy = {
	// "id" :  id,
	// "photo" : $('#photo_1').val(),
	// "destination" : $('#destination_1').val(),
	// "from" : $('#from_1').val(),
	// "to" : $('#to_1').val(),
	// "contacts" : $('#contacts_1').val(),
	// "comments" : $('#comments_1').val()
	
	// }

	// let r = this.display;
	// for(let i=0;i<r.length;i++){
	// if(r[i].id == id){
	//   r[i] = flightdummy;
	//   break;
	// }
	// }

	// this.passView();
	// }




	findAirPlaneByContacts(contacts){
		let r = this.display;
		for(let i=0;i<r.length;i++){
			if(contacts==r[i].contacts){
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

		let bind = this.state[0].bind.procdures;
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
	   	let ph = document.getElementById('photo_1');
		let des = document.getElementById('destination_1');
		let fr = document.getElementById('from_1');
		let to = document.getElementById('to_1');
		let com = document.getElementById('comments_1');
		let con = document.getElementById('contacts_1');

		let m = this.displays[key];
		let display = {"id":m.id,"photo":m.photo,"destination":des.value,"from":fr.value,"to":to.value,"contacts":con.value, "comments":com.value};

		this.displays[key] = display;
		let details = document.getElementById('plainView');
		details.innerHTML = "";
		this.passView();			
	}
	

} //end of app

							class Component extends App {

								constructor(){
									super();
								}

    layOut(){

    	let html = `     

       <div id="airLayOut" class="container-fixed">
	<nav>
    <div class="nav-wrapper">
      <a href="#showStarter" class="brand-logo"><img src="images/btk.jpg" class="circle responsive-img">HOME</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#showForm" onclick="component.formCreate()">Take your Flight</a></li>
        <li><a href="#passView" onclick="component.passView()">People on Board</a></li>
      </ul>
    </div>
  </nav>
                        
              <div id="displayStarter"></div>
              <div id="displayParalax"></div>
              <div id="formCreate"></div>
              <div id="passView"></div>
              <div id="plainView"></div>
               <div id="updatePlane"></div>
               <div id="Edit"></div>
           



  <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
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
			html+= `
				 <div class="row">
			            <div class="col s6 m4">
			    <h4 class="header">${r[i].destination}</h4>
			    <div class="card">
			      <div class="card-image">
			        <img src="${r[i].photo}">
			      </div>
			      <div class="card-stacked">
			        <div class="card-content">
			          <p><h3>From</h3>${r[i].from}</p>
			        </div>
			        <div class="card-action">
			          <a href="#plainView" onclick="component.plainView(${r[i].id})">Detail</a>
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

      let  html = `
                     <br/>
		  	<nav>
	    		<div class="nav-wrapper white">
	    		    <form>
						<div class="input-field">				
							<input onkeyup="component.nameSearch(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>		
				</div>
			</nav>
			<br/> `;

			html += `<div class="row" id="nameSearch">`;

         html += `

		<h5 class="center-align">List of Destination</h5>
		<div class="row">
            `;
        
		      let r = this.displays;
		      for(let i = 0;i<r.length;i++){

		      	 html += `
		      	 <div class="row">
			            <div class="col s6 m4">
			    <h4 class="header">${r[i].destination}</h4>
			    <div class="card">
			      <div class="card-image">
			        <img src="${r[i].photo}">
			      </div>
			      <div class="card-stacked">
			        <div class="card-content">
			          <p><h3>From</h3>${r[i].from}</p>
			        </div>
			        <div class="card-action">
			          <a href="#plainView" onclick="component.plainView(${r[i].id})">Detail</a>
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
	                 
      }

         Edit(id){
         
             let html = `
                 <div class="col s12 m7">
    <h2 class="header">${this.display[id].destination}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="${this.display[id].photo}">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${this.display[id].comments}</p>
        </div>
        <div class="card-action">
         <span onclick="component.deleteAirPlaine(${id})" class="new badge small red" data-badge-caption="">UPDATE</span>								
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>

             `;
                this.reRender(`${html}`,document.getElementById("Edit"));
                  this.showEdit();


         }



         plainView(id) {

         	
             let r = this.findAirPlaneByID(id);
         	  let html = `		  
                    <div class="col s12 m8 offset-m2 l6 offset-l3">
				        <div class="card-panel grey lighten-5 z-depth-20">
				          <div class="row valign-wrapper">
				            <div class="col s2">
				              <img src="${r.photo}" alt="" class="circle responsive-img">
				            </div>
				            <div class="col s10">
				            <h5>Destination</h5>
				              <span class="black-text">${r.destination}</span>			              
				            </div>
				          </div>
				        </div>
				      </div>
                  <div class="col s12 m2">
			      <p class="z-depth-20" style="center-align"></p>
			      </div>                     
         	       <ul class="collection with-header">
			        <li class="collection-header"><h4>${r.destination}</h4></li>
			        <li class="collection-item">From:  ${r.from}</li>
			        <li class="collection-item">Flight:  ${r.to}</li>
			        <li class="collection-item">Contacts:  ${r.contacts}</li>
			        <li class="collection-item">comments:  ${r.comments}</li>
			      </ul>
			      <div class="card-action small">
			      <span onclick="component.updatePlane(${r.id})" class="new badge small green" data-badge-caption="">Change</span>
			      <span onclick="component.deleteAirPlaine(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>								
				    <span onclick="component.passView()" class="new badge small" data-badge-caption="">GO BACK</span>
				  </div>
				  </br>			      
			       `;  
         
			    html += `

               `;   
                  this.reRender(`${html}`,document.getElementById("plainView"));
                  this.showPlainView();
         }

	formCreate() {

		let html = `
		
<form>
    <form class="col s6">
          <div class="row">
          <div class="center-align">
        <div class="input-field col s12">
          <input disabled value="${this.displays.length+1}" id="id" type="text" class="validate">
          <label for="id"></label>
        </div>
      </div>
      
        <div class="input-field col s6">
          <input  id="photo" type="text" class="validate">
          <label for="photo">Link your image</label>
        </div>
        <div class="input-field col s6">
          <input id="destination" type="text" class="validate">
          <label for="destination">Destination Address</label>
        </div>
      </div>
   
        <div class="input-field col s6">
          <input  id="from" type="text" class="validate">
          <label for="from">From</label>
        </div>
        <div class="input-field col s6">
          <input id="to" type="text" class="validate">
          <label for="to">To:</label>
        </div>
      </div>

        <div class="input-field col s12">
          <input id="contacts" type="text" class="validate">
          <label for="contacts">Contact Details</label>
        </div>
      </div>

      <div class="row">
     <div class="input-field col s12">
   <center><label for="comments"><span> Leave comments here:*</span></span><textarea id="comments" class="textarea-field "></textarea></label></center>
        </div> 
    </div>
    </div>
          
            <div class="center-align">
              <center><button onclick="component.createFlight()" class="btn waves-effect waves-light">Save</button></center>
		    </div>
        </div>
    </form>
  </div>
  </div>
        
		`;
          this.reRender(`
			${html}
			`,document.getElementById("formCreate"));  
              this.showForm();
              this.state[0].bind.content_plain = [];		
		      this.state[0].bind.plain_type = [];		
		      this.state[0].bind.plain_desc = [];	
       }

         displayStarter(){

           let html = `  
        
        <div class="container">
           <div class="section no-pad-bot" id="index-banner">
    <div class="containere">
      <br><br>
      <h1 class="header center orange-text">Find Your Flight Now...</h1>
      <div class="row center">
        <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>
      <div class="row center">
        <btn class="btn btn-info" href="" onclick="component.displayParalax()">Get Started!</btn>
      </div>
      <br><br>
    </div>
  </div>
     </div></div>
  `;              
       this.reRender(`
			${html}
			`,document.getElementById("displayStarter")); 
			this.showStarter(); 
}



	  displayParalax(){
        
			let html =  `
					<div class="parallax-container">
					    <div class="parallax"><img src=" "></div>
					  </div>
					  <div class="section white">
					    <div class="row container">
					      <h2 class="header"></h2>
					      <p class="grey-text text-darken-3 lighten-3"></p>
					    </div>
					  </div>
					  <div class="parallax-container">
					    <div class="parallax"><img src="http://cdn-image.travelandleisure.com/sites/default/files/styles/tnl_redesign_article_landing_page/public/landing1015-airplane.jpg?itok=VSTPzlW6"></div>
					  </div>`;      
				    this.reRender(`
				${html}
			`,document.getElementById("displayParalax")); 
		  this.showParalax();
       
}

updatePlane(id){
 
	id = id -1;
	//let bt = this.findAirPlaneByID(id);

	let html = `
	

<center>
<form>
<div class="row">
<fieldset><legend></legend>
<center><label><h1>Update Plane Reservation </h1>
<img src="${this.displays[id].photo}" alt="" class="circle responsive-img"></center>
<center><span class="required">Update destination</span><input type="text"id="destination_1" value="${this.displays[id].destination}"/></center>
<center><span class="required">Update from</span><input type="text"id="from_1" value="${this.displays[id].from}"/></center>
<center><span class="required">Update to</span><input type="text"id="to_1" value="${this.displays[id].to}"/></center>
<center><span class="required">Update Comments</span><input type="text"id="comments_1" value="${this.displays[id].comments}"/></center>
<center><span class="required">Update contacts</span></span><input type="text"id="contacts_1" value="${this.displays[id].contacts}"/></center>
</label></label></label>

<div class="center-align">
<a onclick="component.updateDetails(${id})" class="waves-effect blue waves-light btn">Update</a>
</div>
</fieldset>
</div>
<form>
</center>
`;  
this.reRender(`

  ${html}

  `,document.getElementById("updatePlane"));   

$('#cocList').show();
$('#cocView').hide();
$('#updatePlane').show();
$('#cocRecent').hide();
$('#createBase').hide();    
$('#cocVideos').hide();    
$('#landingPage').hide();
$('#details').hide();
}

		showStarter() {
		$('#displayStarter').show();
		$('#displayParalax').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#plainView').hide();
		$('#updateFlight').hide();
			$('#Edit').hide();
		}

        showForm() {
		$('#formCreate').show();
		$('#displayStarter').hide();
		$('#displayParalax').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#plainView').hide();
	    $('#updateFlight').hide();
	    	$('#Edit').hide();
		}

		showParalax(){
		$('#displayParalax').show();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
        $('#parallax').parallax();
        $('#plainView').hide();
        $('#updateFlight').hide();
        	$('#Edit').hide();	
	}

		showPassView(){
	    $('#passView').show();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#plainView').hide();
		$('#updatePlane').hide();
		$('#updateFlight').hide();
			$('#Edit').hide();
    }       

       showPlainView(){
	    $('#plainView').show();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#formCreate').hide();
		$('#passView').hide();
		$('#updatePlane').hide();
		$('#updateFlight').hide();
			$('#Edit').hide();
    }      


       showUpdateFlight(){
       	$('#updateFlight').show();
	    $('#plainView').hide();
		$('#displayParalax').hide();
		$('#displayStarter').hide();
		$('#updatePlane').hide();
		$('#formCreate').hide();
		$('#passView').hide();
			$('#Edit').hide();
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
		$('#passView').SHOW();
   }
}

let component = new Component();
    component.layOut();
    
