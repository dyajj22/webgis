var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KerawananBanjirKecamatan_1 = new ol.format.GeoJSON();
var features_KerawananBanjirKecamatan_1 = format_KerawananBanjirKecamatan_1.readFeatures(json_KerawananBanjirKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerawananBanjirKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerawananBanjirKecamatan_1.addFeatures(features_KerawananBanjirKecamatan_1);
var lyr_KerawananBanjirKecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KerawananBanjirKecamatan_1, 
                style: style_KerawananBanjirKecamatan_1,
                interactive: true,
    title: 'Kerawanan Banjir Kecamatan<br />\
    <img src="styles/legend/KerawananBanjirKecamatan_1_0.png" /> Kerawanan Rendah<br />\
    <img src="styles/legend/KerawananBanjirKecamatan_1_1.png" /> Kerawanan Sangat Tinggi<br />\
    <img src="styles/legend/KerawananBanjirKecamatan_1_2.png" /> Kerawanan Sedang<br />\
    <img src="styles/legend/KerawananBanjirKecamatan_1_3.png" /> Kerawanan Tinggi<br />\
    <img src="styles/legend/KerawananBanjirKecamatan_1_4.png" /> Tidak Rawan<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KerawananBanjirKecamatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KerawananBanjirKecamatan_1];
lyr_KerawananBanjirKecamatan_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kerawanan': 'Kerawanan', 'Luas': 'Luas', });
lyr_KerawananBanjirKecamatan_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kerawanan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_KerawananBanjirKecamatan_1.set('fieldLabels', {'Kecamatan': 'no label', 'Kerawanan': 'no label', 'Luas': 'no label', });
lyr_KerawananBanjirKecamatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});