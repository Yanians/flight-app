"use strict";

class App{
	constructor(){
		this.content = [
			{	
				"platenumber":"DELETE THIS!",
				"timein":"EMPTY!",
				"timeout":"EMPTY!",
				"image":"data:image/png;base64,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"
			}
			];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createList(){
		let a = document.getElementById('newPlatenumber');
		let b = document.getElementById('newTimeIn');
		let c = document.getElementById('newTimeOut');
		let d = document.getElementById('newImage');
	
		let content = {
			"platenumber":a.value,
			"timein":b.value,
			"timeout":c.value,
			"image":d.value
		};
		this.content.push(content);

		a.value = b.value = c.value = d.value = '';
		this.listInfo();
	}

	deleteItem(key){		
		let table = document.getElementById('listInfo');
		table.deleteRow(key);
		this.content.splice(key,1);

		let details = document.getElementById('listDetails');
		details.innerHTML = "";
		
		this.listInfo();	
		this.showList();	
	}
  itemSearch(platenumber){
    let objects = [];
    let r = this.content;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].platenumber.toUpperCase().indexOf(platenumber.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }

	updateItem(key){
		let b = document.getElementById('updateTimeIn');
		let c = document.getElementById('updateTimeOut');
		let d = document.getElementById('updateImage');

		let e = this.content[key];
		let items = {"platenumber":e.platenumber,"timein":b.value,"timeout":c.value,"image":d.value};

		this.content[key] = items;
		let details = document.getElementById('listDetails');
		details.innerHTML = "";
		
		this.listInfo();
		this.showList();
	}
	calculateAmount(){
    let value1 = document.getElementById('value1').value;
    let value2 = document.getElementById('value2').value;
    let a=parseInt(value1)
    let b=parseInt(value2)
    if(a==a)
    {
      document.getElementById('result').innerHTML = a*b;
    }


	}

}

class Component extends App{
	constructor(){
		super();
	}

	layOut(){
		this.render(
			`	      
		<nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#home" onclick="component.showLandingPage()">The Parking App</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#create" onclick="component.showListCreate()">Create a Parking List</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#view" onclick="component.showList()">View Created List</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#calculator" onclick="component.showCalculator()">Amount Calculator</a>
                    </li>
                     <li class="page-scroll">
                        <a href="#contact" onclick="component.showContact()">Contact Us</a>
                    </li>
                </ul>
            </div>   
        </div>
       
   		 </nav>


		<div id="landingpage">
          
				<br>
				<div class="jumbotron text-center">
				  	<h1>Good Day User!</h1>
				  	<p>This is an app that is specifically designed to monitor your parking business.</p>
				  	<btn class="btn btn-info" href="#page-top" onclick="component.showListCreate()">Get Started!</btn>
				</div></center>
		

				<div class="text-center">
				            <div class="container">
				                <div class="row">
				                    <div class="col-md-4">
				                        <h3>Create Parking list</h3>
				                        <p>Allows you to create a parking list.</p>
				                    </div>
				                    <div class="col-md-4">
				                        <h3>Search Created List</h3>
				                         <p>Allows you to search through your created <br> parking list.</p>
				                        <ul class="list-inline">
				                            
				                        </ul>
				                    </div>
				                    <div class="col-md-4">
				                        <h3>View Created List</h3>
				                        <p>Allows you to View, Update and <br>
				                        Delete the list you made.</p>
				                    </div>
				                </div>
				            </div>
					</div>
				</div>
				
				<div id="createyourlist" class="row marketing">
					<div class="col col-sm-12">
						<div id="listCreate"></div>						
					</div>
				</div>

				<div id="viewlist" class="row marketing">
					<div class="col col-sm-12">
						<h1>Your Parking List!</h1>
						<table id="movieList" class="table">
							<thead>
								<tr>
									<th>Platenumbers:</th><br>
									<th>Buttons:</th>
								</tr>
							</thead>
							<div class="form-group">
							    <div class="input-group">
							      <div class="input-group-addon">
									<span class="glyphicon glyphicon-search"></span>
							      </div>
							      <input onkeyup="component.searchList(this.value)" type="text" class="form-control" placeholder="Search">
							    </div>
							  </div>
							<tbody id="listInfo"></tbody>
							<tbody id="listSearch"></tbody>
						</table>
					</div>
				</div>

				<div id="updatedeletepage" class="row marketing">
					<div id="listDetails"></div>
					</div>
					<div id ="contact">
					</div>
					<div id ="calculator">
					</div>
   		 <footer class="text-center">
		        <div class="footer-below">
		            <div class="container">
		                <div class="row">
		                    <div class="col-lg-12">
		                       	&copy; The Parking App 2016
		                    </div>
		                </div>
		            </div>
		        </div>
    	</footer>

			`
			,document.getElementById('app'));
		this.listInfo();
		$('#landingpage').show();
		$('#createyourlist').hide();		
		$('#viewlist').hide();
		$('#contact').hide();	
		$('#calculator').hide();
	}

	showLandingPage(){
		$('#landingpage').show();
		$('#createyourlist').hide();
		$('#viewlist').hide();
		$('#updatedeletepage').hide();
		$('#contact').hide();
		$('#calculator').hide();

	}

	showList(){
		$('#landingpage').hide();
		$('#createyourlist').hide();
		$('#viewlist').show();
		$('#updatedeletepage').hide();
		$('#contact').hide();
		$('#calculator').hide();

	}

	showListCreate(){
		$('#landingpage').hide();
		$('#createyourlist').show();		
		$('#viewlist').hide();
		$('#updatedeletepage').hide();
		$('#contact').hide();
		$('#calculator').hide();
		
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createyourlist').hide();		
		$('#viewlist').hide();
		$('#updatedeletepage').show();
		$('#contact').hide();
		$('#calculator').hide();	
	}
	showContact(){
		$('#landingpage').hide();
		$('#createyourlist').hide();		
		$('#viewlist').hide();
		$('#updatedeletepage').hide();
		$('#contact').show();
		$('#calculator').hide();	
	}
	showCalculator(){
		$('#landingpage').hide();
		$('#createyourlist').hide();		
		$('#viewlist').hide();
		$('#updatedeletepage').hide();
		$('#contact').hide();
		$('#calculator').show();

	}		
	listInfo(){
		let html = ``;
		let r = this.content;
		for(let i=0;i<r.length;i++){
			html += `
				<tr>
					<td>${r[i].platenumber}</td>
					<td><button class="btn btn-default" onclick="component.listDetails(${[i]})">Show Me More!</button></td>
				</tr>
			`;
		}
		 html += ``;
		this.reRender(
			html,document.getElementById('listInfo'));
	}

	searchList(platenumber){
		let html = ``;
		let r = this.itemSearch(platenumber);
		for(let i=0;i<r.length;i++){
			html += `
				<tr>
					<td>${r[i].platenumber}</td>
					<td><button class="btn btn-default" onclick="component.listDetails(${[i]})">Show Me More!</button></td>
				</tr>
			`;
		$('#listInfo').hide();
		}
		this.reRender(
			html,document.getElementById("listSearch"));
	}

	listDetails(key){
		console.log("key: ",key);
		this.reRender(
			`
				<h1>Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.content[key].image}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="listDetailsInfo">
				        <h4 class="media-heading">${this.content[key].platenumber}</h4>
				        Time In:${this.content[key].timein}<br/>
						Time Out: ${this.content[key].timeout}<br/>
						<button class="btn btn-warning" onclick="component.listUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteItem(${key})">Delete</button>
						<button class="btn btn-default" onclick="component.showList()">Return</button>
					</div>	
				</div>			
			`,document.getElementById('listDetails'));
			this.showUpdateDelete();
	}



	listCreate(){
		this.reRender(
			`
				<h1>Create your Parking List!</h1><hr>
				<h4>Enter Platenumber:</h4> <input class="form-control" id="newPlatenumber" type="" placeholder="Platenumber here!" /><br/>
				<h4>Enter Time In:</h4> <input class="form-control" id="newTimeIn" type="" placeholder="Enter Time In here!" /><br/>
				<h4>Time Out:</h4> <input class="form-control" id="newTimeOut" type="" placeholder="Please Keep this Empty!" /><br/>
				<h4>Enter Desired Image:</h4> <input class="form-control" id="newImage" type="" placeholder="Enter Desired Image (LINK) here!" /><br/>
				<button class="btn btn-warning" onclick="component.createList()">Create</button><hr>
			`,document.getElementById('listCreate'));
	}

	listUpdate(key){
		this.reRender(
			`
				<h4 class="media-heading">${this.content[key].platenumber}</h4>
		        Time In: <input id="updateTimeIn" type="text" value="${this.content[key].timein}" /><br/>
				Time Out: <input id="updateTimeOut" type="text" value="${this.content[key].timeout}" /><br/>
				Image: <input id="updateImage" type="text" value="${this.content[key].image}" /><br/>
				<button class="btn btn-success" onclick="component.updateItem(${key})">Save</button>
			`,document.getElementById('listDetailsInfo'));
	}
	contactUs(){
		this.reRender(
			`
			<div class="text-center">
				<div class="jumbotron">
				  	<h1>Hello User!</h1>
				  	<p>For questions about the app,<br>
				  	please email me at "joverelox@gmail.com".</p>
				</div>
			</div>
			`,document.getElementById('contact'));
	}
	amountCalculator(){
		this.reRender(
			`
			<hr>
			<div class="text-center">
				<h3>Enter Hours Spent:<h3><input id="value1" type="text" class="text-center"/>
				<h3>Parking Fee:<h3><input id="value2" type="text" class="text-center"/><br>
				<input type="submit" onclick="component.calculateAmount()"><hr>
				<p>Amount to pay:</p>
				<div class="panel panel-default" id="result">
  					<div class="panel-body">
  					</div>
				</div>
			</div>
			`,document.getElementById('calculator'))
	}

}

let component = new Component();
component.layOut();
component.listCreate();
component.contactUs();
component.amountCalculator();