var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Embankments_1 = new ol.format.GeoJSON();
var features_Embankments_1 = format_Embankments_1.readFeatures(json_Embankments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embankments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embankments_1.addFeatures(features_Embankments_1);
var lyr_Embankments_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Embankments_1, 
                style: style_Embankments_1,
                interactive: true,
                title: '<img src="styles/legend/Embankments_1.png" /> Embankments'
            });
var format_Sindh_boundary_2 = new ol.format.GeoJSON();
var features_Sindh_boundary_2 = format_Sindh_boundary_2.readFeatures(json_Sindh_boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sindh_boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sindh_boundary_2.addFeatures(features_Sindh_boundary_2);
var lyr_Sindh_boundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sindh_boundary_2, 
                style: style_Sindh_boundary_2,
                interactive: false,
                title: '<img src="styles/legend/Sindh_boundary_2.png" /> Sindh_boundary'
            });
var format_Survey_update_3 = new ol.format.GeoJSON();
var features_Survey_update_3 = format_Survey_update_3.readFeatures(json_Survey_update_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Survey_update_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Survey_update_3.addFeatures(features_Survey_update_3);
var lyr_Survey_update_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Survey_update_3, 
                style: style_Survey_update_3,
                interactive: true,
                title: '<img src="styles/legend/Survey_update_3.png" /> Survey_update'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Embankments_1.setVisible(true);lyr_Sindh_boundary_2.setVisible(true);lyr_Survey_update_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Embankments_1,lyr_Sindh_boundary_2,lyr_Survey_update_3];
lyr_Embankments_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Sindh_boundary_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Survey_update_3.set('fieldAliases', {'Sr': 'Sr', 'X': 'X', 'Y': 'Y', 'Elev': 'Elev', 'Desc': 'Desc', });
lyr_Embankments_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Sindh_boundary_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Survey_update_3.set('fieldImages', {'Sr': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Elev': 'TextEdit', 'Desc': 'TextEdit', });
lyr_Embankments_1.set('fieldLabels', {'id': 'no label', 'name': 'inline label', });
lyr_Sindh_boundary_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Survey_update_3.set('fieldLabels', {'Sr': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Elev': 'inline label', 'Desc': 'inline label', });
lyr_Survey_update_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});