

function Chrall_makeGridHtml() {
	var html = "<div class=chrall>";
	html += "<table class=grid>";
	html += "<tr><td bgcolor=#BABABA></td><td colspan=" + (xmax-xmin+3) + " align=center title=\"Nordhikan (Y+)\">Nordhikan (Y+)</td><td bgcolor=#BABABA></td></tr>";
	html += "<tr>";
	html += "<td nowrap rowspan="+(ymax-ymin+3)+" title=\"Oxhykan (X-)\"><span style='display:block;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-moz-transform:rotate(-90deg);margin-left:-30px;margin-right:-30px;'>Oxhykan&nbsp;(X-)</span></td>";
	html += "<td align=center height=30 width=30>y\\x</td>";
	for (var x=xmin; x<=xmax; x++) {
		html += "<td>"+x+"</td>";
	}
	html += "<td align=center height=30 width=30>x/y</td>";
	html += "<td rowspan="+(ymax-ymin+3)+" title='Orhykan (X+)'><span style='display:block;transform:rotate(90deg);-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);margin-left:-30px;margin-right:-30px;'>Orhykan&nbsp;(X+)</span></td>";
	html += "</tr>";
	// TODO optimiser ça, ça fait vraiment beaucoup d'itérations... Peut-être construire la grille en donnant des id(genre x|y) aux cellules et les remplir en itérant une seule fois sur les monstres ?
	for (var y=ymax; y>=ymin; y--) {
		html += "<tr><td align=center height=30>"+ y + "</td>";
		for (var x=xmin; x<=xmax; x++) {			
			html += "<td title='X="+x+" Y="+y+"'><br>";
			for (var i=0; i<trollsInView.length; i++) {
				var t = trollsInView[i];
				if (t.x==x && t.y==y) {
					html += "<span class=troll>"+t.z+":"+t.name+"</span><br>";
				}
			}
			for (var i=0; i<monstersInView.length; i++) {
				var m = monstersInView[i];
				if (m.x==x && m.y==y) {
					html += "<span class=monster>"+m.z+":"+m.name+"</span><br>";
				}
			}
			html += "</td>";
		}
		html += "<td align=center height=30>"+ y + "</td></tr>";
	}
	html += "<tr>";
	html += "<td align=center height=30 width=30>y/x</td>";
	for (var x=xmin; x<=xmax; x++) {
		html += "<td>"+x+"</td>";
	}
	html += "<td align=center height=30 width=30>x\\y</td>";
	html += "</tr>";
	html += "<tr><td bgcolor=#BABABA></td><td colspan=" + (xmax-xmin+3) + " align=center title=\"Midikan (Y-)\">Midikan (Y-)</td><td bgcolor=#BABABA></td></tr>";
	html += "</table>";
	html += "</div><br>";
	return html;
}

function Chrall_analyseMonsterTable(monsterTable) {
	$(monsterTable).find("tr.mh_tdpage").each(
		function(){
			var monster = new Monster();
			var cells = $(this).find("td");
			var i=1;
			monster.id = parseInt($(cells[i++]).text());
			monster.setName($(cells[i++]).text());
			monster.x = parseInt($(cells[i++]).text());
			monster.y = parseInt($(cells[i++]).text());
			monster.z = parseInt($(cells[i++]).text());
			monstersInView.push(monster);
			//$(this).append("vu");
		}
	);
	// TODO trier par z pour la construction de la grille
	// TODO faire un objet (un tableau) grid ?
}

function Chrall_analyseTrollTable(table) {
	$(table).find("tr.mh_tdpage").each(
		function(){
			var troll = new Troll();
			var cells = $(this).find("td");
			var i=1;
			troll.id = parseInt($(cells[i++]).text());
			troll.name = $(cells[i++]).text();
			troll.level = $(cells[i++]).text();
			troll.race = $(cells[i++]).text();
			troll.guilde = $(cells[i++]).text();
			troll.x = parseInt($(cells[i++]).text());
			troll.y = parseInt($(cells[i++]).text());
			troll.z = parseInt($(cells[i++]).text());
			trollsInView.push(troll);
		}
	);
}

function Chrall_analyseThingTable(table, list) {
	$(table).find("tr.mh_tdpage").each(
		function(){
			var thing = new Thing();
			var cells = $(this).find("td");
			var i=1;
			thing.id = parseInt($(cells[i++]).text());
			thing.name = $(cells[i++]).text();
			thing.x = parseInt($(cells[i++]).text());
			thing.y = parseInt($(cells[i++]).text());
			thing.z = parseInt($(cells[i++]).text());
			list.push(thing);
		}
	);
}

function Chrall_enlargeView(thingList) {
	var t;
	var i=0;
	if (thingList.length>0 && viewIsEmpty) {
		t = thingList[i++];
		xmin = t.x;
		xmax = t.x;
		ymin = t.y;
		ymax = t.y;
		zmin = t.z;
		zmax = t.z;
		viewIsEmpty = false;
	}
	for (;i<thingList.length; i++) {
		t = thingList[i++];
		if (t.x<xmin) xmin=t.x;
		else if (t.x>xmax) xmax=t.x;
		if (t.y<ymin) ymin=t.y;
		else if (t.y>ymax) ymax=t.y;
		if (t.z<zmin) zmin=t.z;
		else if (t.z>zmax) zmax=t.z;
	}
}

function Chrall_analyseView() {
	var tables = $("table.mh_tdborder");
	Chrall_analyseMonsterTable(tables[1]);
	Chrall_analyseTrollTable(tables[2]);
	Chrall_analyseThingTable(tables[3], objectsInView);
	Chrall_analyseThingTable(tables[4], mushroomsInView);
	Chrall_analyseThingTable(tables[5], placesInView);
	Chrall_analyseThingTable(tables[6], cenotaphsInView);
	
	Chrall_enlargeView(monstersInView);
	Chrall_enlargeView(trollsInView);
}