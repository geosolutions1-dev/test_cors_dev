var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Admin_Districts_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/GhanaCORS/wms?",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Admin_Districts",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Admin_Districts',
                            popuplayertitle: 'Admin_Districts',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Admin_Districts_2, 0]);
var format_SGGPS206920KM_3 = new ol.format.GeoJSON();
var features_SGGPS206920KM_3 = format_SGGPS206920KM_3.readFeatures(json_SGGPS206920KM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGGPS206920KM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SGGPS206920KM_3.addFeatures(features_SGGPS206920KM_3);
var lyr_SGGPS206920KM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SGGPS206920KM_3, 
                style: style_SGGPS206920KM_3,
                popuplayertitle: 'SG GPS2/06/9 - 20KM',
                interactive: true,
                title: '<img src="styles/legend/SGGPS206920KM_3.png" /> SG GPS2/06/9 - 20KM'
            });
var format_SGGAA040019120KM_4 = new ol.format.GeoJSON();
var features_SGGAA040019120KM_4 = format_SGGAA040019120KM_4.readFeatures(json_SGGAA040019120KM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGGAA040019120KM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SGGAA040019120KM_4.addFeatures(features_SGGAA040019120KM_4);
var lyr_SGGAA040019120KM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SGGAA040019120KM_4, 
                style: style_SGGAA040019120KM_4,
                popuplayertitle: 'SGGA A0400/19/1-20KM',
                interactive: true,
                title: '<img src="styles/legend/SGGAA040019120KM_4.png" /> SGGA A0400/19/1-20KM'
            });
var format_SGGAEX19120KM_5 = new ol.format.GeoJSON();
var features_SGGAEX19120KM_5 = format_SGGAEX19120KM_5.readFeatures(json_SGGAEX19120KM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGGAEX19120KM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SGGAEX19120KM_5.addFeatures(features_SGGAEX19120KM_5);
var lyr_SGGAEX19120KM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SGGAEX19120KM_5, 
                style: style_SGGAEX19120KM_5,
                popuplayertitle: 'SGGA EX 19 1 - 20KM',
                interactive: true,
                title: '<img src="styles/legend/SGGAEX19120KM_5.png" /> SGGA EX 19 1 - 20KM'
            });
var format_CORStations_6 = new ol.format.GeoJSON();
var features_CORStations_6 = format_CORStations_6.readFeatures(json_CORStations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORStations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORStations_6.addFeatures(features_CORStations_6);
var lyr_CORStations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORStations_6, 
                style: style_CORStations_6,
                popuplayertitle: 'CORStations',
                interactive: true,
                title: '<img src="styles/legend/CORStations_6.png" /> CORStations'
            });

lyr_EsriSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_Admin_Districts_2.setVisible(false);lyr_SGGPS206920KM_3.setVisible(false);lyr_SGGAA040019120KM_4.setVisible(false);lyr_SGGAEX19120KM_5.setVisible(false);lyr_CORStations_6.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_OpenStreetMap_1,lyr_Admin_Districts_2,lyr_SGGPS206920KM_3,lyr_SGGAA040019120KM_4,lyr_SGGAEX19120KM_5,lyr_CORStations_6];
lyr_SGGPS206920KM_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Location': 'Location', });
lyr_SGGAA040019120KM_4.set('fieldAliases', {'fid': 'fid', 'Beacon': 'Beacon', });
lyr_SGGAEX19120KM_5.set('fieldAliases', {'fid': 'fid', 'Beacon': 'Beacon', });
lyr_CORStations_6.set('fieldAliases', {'fid': 'fid', 'Beacon': 'Beacon', 'Location': 'Location', 'District': 'District', 'Region': 'Region', 'Description': 'Description', 'Height': 'Height', 'Photo': 'Photo', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_SGGPS206920KM_3.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'Location': 'TextEdit', });
lyr_SGGAA040019120KM_4.set('fieldImages', {'fid': 'Hidden', 'Beacon': 'TextEdit', });
lyr_SGGAEX19120KM_5.set('fieldImages', {'fid': 'Hidden', 'Beacon': 'TextEdit', });
lyr_CORStations_6.set('fieldImages', {'fid': 'Hidden', 'Beacon': 'TextEdit', 'Location': 'TextEdit', 'District': 'TextEdit', 'Region': 'TextEdit', 'Description': 'TextEdit', 'Height': 'TextEdit', 'Photo': 'ExternalResource', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_SGGPS206920KM_3.set('fieldLabels', {'Location': 'no label', });
lyr_SGGAA040019120KM_4.set('fieldLabels', {'Beacon': 'no label', });
lyr_SGGAEX19120KM_5.set('fieldLabels', {'Beacon': 'no label', });
lyr_CORStations_6.set('fieldLabels', {'Beacon': 'inline label - always visible', 'Location': 'inline label - always visible', 'District': 'inline label - always visible', 'Region': 'inline label - always visible', 'Description': 'inline label - always visible', 'Height': 'inline label - always visible', 'Photo': 'inline label - always visible', });
lyr_CORStations_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});