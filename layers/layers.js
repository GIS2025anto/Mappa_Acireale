var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Com01012022_WGS84_1 = new ol.format.GeoJSON();
var features_Com01012022_WGS84_1 = format_Com01012022_WGS84_1.readFeatures(json_Com01012022_WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Com01012022_WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Com01012022_WGS84_1.addFeatures(features_Com01012022_WGS84_1);
var lyr_Com01012022_WGS84_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Com01012022_WGS84_1, 
                style: style_Com01012022_WGS84_1,
                popuplayertitle: 'Com01012022_WGS84',
                interactive: true,
                title: '<img src="styles/legend/Com01012022_WGS84_1.png" /> Com01012022_WGS84'
            });
var format_Perimetro_2 = new ol.format.GeoJSON();
var features_Perimetro_2 = format_Perimetro_2.readFeatures(json_Perimetro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetro_2.addFeatures(features_Perimetro_2);
var lyr_Perimetro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetro_2, 
                style: style_Perimetro_2,
                popuplayertitle: 'Perimetro',
                interactive: true,
    title: 'Perimetro<br />\
    <img src="styles/legend/Perimetro_2_0.png" /> A<br />\
    <img src="styles/legend/Perimetro_2_1.png" /> B<br />\
    <img src="styles/legend/Perimetro_2_2.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Com01012022_WGS84_1.setVisible(true);lyr_Perimetro_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Com01012022_WGS84_1,lyr_Perimetro_2];
lyr_Com01012022_WGS84_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Area': 'Shape_Area', 'Shape_Leng': 'Shape_Leng', 'Regione': 'Regione', });
lyr_Perimetro_2.set('fieldAliases', {'id': 'id', 'zona': 'zona', });
lyr_Com01012022_WGS84_1.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Regione': 'TextEdit', });
lyr_Perimetro_2.set('fieldImages', {'id': 'TextEdit', 'zona': 'TextEdit', });
lyr_Com01012022_WGS84_1.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Area': 'no label', 'Shape_Leng': 'no label', 'Regione': 'no label', });
lyr_Perimetro_2.set('fieldLabels', {'id': 'no label', 'zona': 'header label - always visible', });
lyr_Perimetro_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});