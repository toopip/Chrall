//

// données issues à peu près directement de ftp://ftp.mountyhall.com/Public_Monstres.txt
// Attention à conserver l'ordre alphabétique, afin que "Ombre" soit avant "Ombre de roches" (et autres cas similaires d'inclusion)
var monster_data = [
	["161", "Abishaii Bleu", "un", "http://www.mountyhall.com/images/Monstres/GO_abishai_bleu.jpg"],
	["94", "Abishaii Noir", "un", "http://www.mountyhall.com/images/Monstres/GO_abishai_noir.jpg"],
	["96", "Abishaii Rouge", "un", "http://www.mountyhall.com/images/Monstres/GO_abishai_rouge.jpg"],
	["95", "Abishaii Vert", "un", "http://www.mountyhall.com/images/Monstres/GO_abishai_vert.jpg"],
	["103", "Ame-en-peine", "une", "http://www.mountyhall.com/images/Monstres/BO_AmeEnPeine.jpg"],
	["18", "Amibe Géante", "une", "http://www.mountyhall.com/images/Monstres/VB_amibe.jpg"],
	["45", "Anaconda des Catacombes", "un", "http://www.mountyhall.com/images/Monstres/AnacondaCatacombes.jpg"],
	["75", "Ankheg", "un", "http://www.mountyhall.com/images/Monstres/VG_Ankheg.jpg"],
	["203", "Anoploure Purpurin", "un", "http://www.mountyhall.com/images/Monstres/BO_AnolporPurpurin.jpg"],
	["15", "Araignée Géante", "une", "http://www.mountyhall.com/images/Monstres/AraigneeGeante.jpg"],
	["221", "Ashashin", "un", "http://www.mountyhall.com/images/Monstres/BO_Ashashin.jpg"],
	["104", "Banshee", "une", "http://www.mountyhall.com/images/Monstres/GO_Banshee.jpg"],
	["146", "Barghest", "un", "http://www.mountyhall.com/images/Monstres/BO_Barghest.jpg"],
	["76", "Basilisk", "un", "http://www.mountyhall.com/images/Monstres/BO_Basilisk.jpg"],
	["139", "Behemoth", "un", "http://www.mountyhall.com/images/Monstres/BO_Behemoth.jpg"],
	["77", "Behir", "un", "http://www.mountyhall.com/images/Monstres/BO_Behir.jpg"],
	["158", "Boggart", "un", "http://www.mountyhall.com/images/Monstres/GO_Boggart.jpg"],
	["164", "Bondin", "un", "http://www.mountyhall.com/images/Monstres/VB_Bondin.jpg"],
	["214", "Bouj'Dla", "un", "http://www.mountyhall.com/images/Monstres/VB_BoujDla.jpg"],
	["215", "Bouj'Dla Placide", "un", "http://www.mountyhall.com/images/Monstres/VB_BoujDla.jpg"],
	["112", "Bulette", "une", "http://www.mountyhall.com/images/Monstres/BO_Bulet.jpg"],
	["40", "Caillouteux", "un", "http://www.mountyhall.com/images/Monstres/VG_Caillouteux.jpg"],
	["204", "Capitan", "un", "http://www.mountyhall.com/images/Monstres/BO_Capitan.jpg"],
	["135", "Carnosaure", "un", "http://www.mountyhall.com/images/Monstres/VG_Carnosaure.jpg"],
	["118", "Champi-Glouton", "un", "http://www.mountyhall.com/images/Monstres/ChampiGlouton.jpg"],
	["137", "Chauve-Souris Géante", "une", "http://www.mountyhall.com/images/Monstres/ChauveSouris.jpg"],
	["207", "Cheval à Dents de Sabre", "un", "http://www.mountyhall.com/images/Monstres/MA_cheval_dent_de_sabreF.jpg"],
	["80", "Chimère", "une", "http://www.mountyhall.com/images/Monstres/BO_Chimere.jpg"],
	["192", "Chonchon", "un", "http://www.mountyhall.com/images/Monstres/GO_Chonchon.jpg"],
	["206", "Coccicruelle", "une", "-"],
	["81", "Cockatrice", "une", "http://www.mountyhall.com/images/Monstres/VB_Coquatrice.jpg"],
	["42", "Croquemitaine", "un", "http://www.mountyhall.com/images/Monstres/BO_Croquemitaine.jpg"],
	["141", "Cube Gélatineux", "un", "-"],
	["225", "Daemonite", "un", "http://www.mountyhall.com/images/Monstres/KH_Daemonite.jpg"],
	["140", "Djinn", "un", "http://www.mountyhall.com/images/Monstres/VB_djinn.jpg"],
	["167", "Ectoplasme", "un", "http://www.mountyhall.com/images/Monstres/BO_Ectoplasme.jpg"],
	["142", "Effrit", "un", "http://www.mountyhall.com/images/Monstres/KH_Effrit.jpg"],
	["60", "Elémentaire d'Air", "un", "http://www.mountyhall.com/images/Monstres/AK_elementaireair.jpg"],
	["59", "Elémentaire d'Eau", "un", "http://www.mountyhall.com/images/Monstres/AK_elementaireeau.jpg"],
	["57", "Elémentaire de Feu", "un", "http://www.mountyhall.com/images/Monstres/AK_elementairefeu.jpg"],
	["58", "Elémentaire de Terre", "un", "http://www.mountyhall.com/images/Monstres/VB_elementairedeterre.jpg"],
	["134", "Elémentaire du Chaos", "un", "http://www.mountyhall.com/images/Monstres/AK_elementairechaos.jpg"],
	["82", "Erinyes", "une", "http://www.mountyhall.com/images/Monstres/VB_erinyes.jpg"],
	["109", "Esprit-Follet", "un", "-"],
	["197", "Essaim Sanguinaire", "un", "-"],
	["54", "Ettin", "un", "http://www.mountyhall.com/images/Monstres/VB_etins.jpg"],
	["68", "Fantôme", "un", "http://www.mountyhall.com/images/Monstres/GO_Fantome.jpg"],
	["70", "Feu Follet", "un", "http://www.mountyhall.com/images/Monstres/VB_feufollet.jpg"],
	["210", "Flagelleur Mental", "un", "-"],
	["199", "Foudroyeur", "un", "http://www.mountyhall.com/images/Monstres/TO_Foudroyeur.jpg"],
	["219", "Fumeux", "un", "http://www.mountyhall.com/images/Monstres/Fumeux.jpg"],
	["84", "Fungus Géant", "un", "http://www.mountyhall.com/images/Monstres/OF_Fungus.jpg"],
	["113", "Fungus Violet", "un", "-"],
	["200", "Furgolin", "un", "http://www.mountyhall.com/images/Monstres/VB_Furgolin.jpg"],
	["85", "Gargouille", "une", "http://www.mountyhall.com/images/Monstres/VB_Gargouille.jpg"],
	["61", "Géant de Pierre", "un", "http://www.mountyhall.com/images/Monstres/BO_GeantDePierre.jpg"],
	["114", "Géant des Gouffres", "un", "http://www.mountyhall.com/images/Monstres/BO_GeantDesGouffres.jpg"],
	["230", "Geck'oo", "un", "-"],
	["244", "Geck'oo Majestueux", "un", "-"],
	["191", "Glouton", "un", "http://www.mountyhall.com/images/Monstres/OF_Glouton.jpg"],
	["86", "Gnoll", "un", "http://www.mountyhall.com/images/Monstres/FP_Gnoll.jpg"],
	["1", "Goblin", "un", "http://www.mountyhall.com/images/Monstres/Gobelin.jpg"],
	["79", "Goblours", "un", "http://www.mountyhall.com/images/Monstres/OF_Goblours.jpg"],
	["98", "Golem d'Argile", "un", "http://www.mountyhall.com/images/Monstres/BO_GolemDArgile.jpg"],
	["97", "Golem de Chair", "un", "http://www.mountyhall.com/images/Monstres/BO_GolemDeChair.jpg"],
	["100", "Golem de Fer", "un", "http://www.mountyhall.com/images/Monstres/OF_GolemFer.jpg"],
	["99", "Golem de Pierre", "un", "http://www.mountyhall.com/images/Monstres/BO_GolemDePierre.jpg"],
	["111", "Gorgone", "une", "http://www.mountyhall.com/images/Monstres/VG_Gorgogne.jpg"],
	["19", "Goule", "une", "http://www.mountyhall.com/images/Monstres/FP_Goule.jpg"],
	["101", "Gremlins", "un", "http://www.mountyhall.com/images/Monstres/Gremlins.jpg"],
	["169", "Gritche", "un", "-"],
	["106", "Grouilleux", "un", "-"],
	["144", "Grylle", "un", "http://www.mountyhall.com/images/Monstres/OF_Grylle.jpg"],
	["14", "Harpie", "une", "http://www.mountyhall.com/images/Monstres/Harpie.jpg"],
	["165", "Hellrot", "un", "http://www.mountyhall.com/images/Monstres/VB_hellrot.jpg"],
	["71", "Homme-Lézard", "un", "http://www.mountyhall.com/images/Monstres/VB_homme-lezard.jpg"],
	["131", "Hurleur", "un", "http://www.mountyhall.com/images/Monstres/Hurleur.jpg"],
	["198", "Incube", "un", "http://www.mountyhall.com/images/Monstres/BO_Incube.jpg"],
	["87", "Kobold", "un", "http://www.mountyhall.com/images/Monstres/VG_Kobold.jpg"],
	["223", "Labeilleux", "une", "http://www.mountyhall.com/images/Monstres/OF_Labeilleux.jpg"],
	["16", "Lézard Géant", "un", "http://www.mountyhall.com/images/Monstres/LezardGeant.jpg"],
	["125", "Limace Géante", "une", "http://www.mountyhall.com/images/Monstres/VB_limace.jpg"],
	["46", "Loup-Garou", "un", "http://www.mountyhall.com/images/Monstres/LoupGarou.jpg"],
	["126", "Lutin", "un", "http://www.mountyhall.com/images/Monstres/Lutin.jpg"],
	["173", "Mante Fulcreuse", "une", "-"],
	["89", "Manticore", "une", "http://www.mountyhall.com/images/Monstres/VB_manticore.jpg"],
	["120", "Marilith", "une", "http://www.mountyhall.com/images/Monstres/GO_Marilith2.jpg"],
	["88", "Méduse", "une", "http://www.mountyhall.com/images/Monstres/VB_Meduse.jpg"],
	["202", "Mégacéphale", "un", "http://www.mountyhall.com/images/Monstres/FP_Megacephale.jpg"],
	["63", "Mille-Pattes Géant", "un", "http://www.mountyhall.com/images/Monstres/VG_MillePattesGeant.jpg"],
	["117", "Mimique", "un", "http://www.mountyhall.com/images/Monstres/VG_Mimique.jpg"],
	["44", "Minotaure", "un", "http://www.mountyhall.com/images/Monstres/Minotaure.jpg"],
	["102", "Molosse Satanique", "un", "http://www.mountyhall.com/images/Monstres/MolosseSatanique.jpg"],
	["2", "Momie", "une", "http://www.mountyhall.com/images/Monstres/Momie.jpg"],
	["105", "Monstre Rouilleur", "un", "http://www.mountyhall.com/images/Monstres/VB_monstre_rouilleur.jpg"],
	["194", "Mouch'oo Majestueux Sauvage", "un", "-"],
	["193", "Mouch'oo Sauvage", "un", "http://www.mountyhall.com/images/Monstres/NA_Mouchoo.gif"],
	["64", "Naga", "un", "http://www.mountyhall.com/images/Monstres/TO_Naga.jpg"],
	["147", "Nécrochore", "un", "http://www.mountyhall.com/images/Monstres/KH_Necrochore.jpg"],
	["227", "Nécromant", "un", "-"],
	["56", "Nécrophage", "un", "-"],
	["43", "Nuage d'Insectes", "un", "-"],
	["166", "Nuée de Vermine", "une", "-"],
	["17", "Ogre", "un", "http://www.mountyhall.com/images/Monstres/Ogre.jpg"],
	["128", "Ombre", "une", "http://www.mountyhall.com/images/Monstres/VB_ombre.jpg"],
	["66", "Ombre de Roches", "une", "http://www.mountyhall.com/images/Monstres/VG_OmbreDesRoches.jpg"],
	["3", "Orque", "un", "http://www.mountyhall.com/images/Monstres/Orque.jpg"],
	["67", "Ours-Garou", "un", "http://www.mountyhall.com/images/Monstres/GO_OursGarou.jpg"],
	["119", "Palefroi Infernal", "un", "http://www.mountyhall.com/images/Monstres/VG_PalefroiInfernal.jpg"],
	["108", "Phoenix", "un", "http://www.mountyhall.com/images/Monstres/GO_Phoenix.jpg"],
	["8", "Plante Carnivore", "une", "http://www.mountyhall.com/images/Monstres/PlanteCarnivore.jpg"],
	["252", "Raquettou", "un", "-"],
	["9", "Rat Géant", "un", "http://www.mountyhall.com/images/Monstres/RatGeant.jpg"],
	["115", "Rat-Garou", "un", "http://www.mountyhall.com/images/Monstres/RatGarou.jpg"],
	["41", "Rocketeux", "un", "http://www.mountyhall.com/images/Monstres/VB_rocketeux.jpg"],
	["130", "Sagouin", "un", "http://www.mountyhall.com/images/Monstres/VG_Sagouin.jpg"],
	["12", "Scarabée Géant", "un", "http://www.mountyhall.com/images/Monstres/ScarabeeGeant.jpg"],
	["62", "Scorpion Géant", "un", "http://www.mountyhall.com/images/Monstres/VG_ScorpionGeant.jpg"],
	["48", "Shai", "un", "http://www.mountyhall.com/images/Monstres/GO_Shai.jpg"],
	["133", "Slaad", "un", "http://www.mountyhall.com/images/Monstres/Slaad.jpg"],
	["132", "Sorcière", "une", "http://www.mountyhall.com/images/Monstres/VB_sorciere.jpg"],
	["90", "Spectre", "un", "http://www.mountyhall.com/images/Monstres/OF_Spectre.jpg"],
	["201", "Sphinx", "un", "-"],
	["6", "Squelette", "un", "http://www.mountyhall.com/images/Monstres/Squelette.jpg"],
	["127", "Strige", "une", "http://www.mountyhall.com/images/Monstres/VB_strige.jpg"],
	["10", "Succube", "une", "http://www.mountyhall.com/images/Monstres/Succube.jpg"],
	["129", "Tertre Errant", "un", "http://www.mountyhall.com/images/Monstres/BO_TertreErrant.jpg"],
	["121", "Thri-kreen", "un", "http://www.mountyhall.com/images/Monstres/VB_three-kreen.jpg"],
	["116", "Tigre-Garou", "un", "http://www.mountyhall.com/images/Monstres/KH_TigreGarou.jpg"],
	["122", "Titan", "un", "http://www.mountyhall.com/images/Monstres/VB_titan.jpg"],
	["168", "Trancheur", "un", "http://www.mountyhall.com/images/Monstres/VB_petittrancheur.jpg"],
	["196", "Tubercule Tueur", "un", "http://www.mountyhall.com/images/Monstres/GO_Tubercule.jpg"],
	["107", "Tutoki", "un", "http://www.mountyhall.com/images/Monstres/FP_Tutoki.jpg"],
	["69", "Vampire", "un", "http://www.mountyhall.com/images/Monstres/GO_Vampire.jpg"],
	["47", "Ver Carnivore Géant", "un", "http://www.mountyhall.com/images/Monstres/GO_Vcg.jpg"],
	["145", "Vouivre", "une", "http://www.mountyhall.com/images/Monstres/VG_Vouivre.jpg"],
	["136", "Worg", "un", "-"],
	["72", "Xorn", "un", "http://www.mountyhall.com/images/Monstres/OF_Xorn.jpg"],
	["123", "Yéti", "un", "http://www.mountyhall.com/images/Monstres/Yeti.jpg"],
	["124", "Yuan-ti", "un", "-"],
	["7", "Zombie", "un", "http://www.mountyhall.com/images/Monstres/Zombie.jpg"]
];

function getMonsterMhImageUrl(monsterName) {
	var emn = " "+monsterName.replace('%20', ' ')+" ";// attention : on peut recevoir le nom urlencodé
	for (var i=monster_data.length; i-->0;) {
		if (~emn.indexOf(" "+monster_data[i][1]+" ")) {
			var s = monster_data[i][3];
			if (s && s.length>4) {
				return s;
			}
		}
	}
	return null;
}
