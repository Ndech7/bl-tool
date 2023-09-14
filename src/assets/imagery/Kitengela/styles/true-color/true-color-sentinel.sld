<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" version="1.0.0" xmlns:sld="http://www.opengis.net/sld">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>KITENGELA SENTINEL</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:RedChannel>
                <sld:SourceChannelName>3</sld:SourceChannelName>
                <sld:ContrastEnhancement>
                  <sld:Normalize>
                    <sld:VendorOption name="algorithm">StretchToMinimumMaximum</sld:VendorOption>
                    <sld:VendorOption name="minValue">2216</sld:VendorOption>
                    <sld:VendorOption name="maxValue">3307</sld:VendorOption>
                  </sld:Normalize>
                </sld:ContrastEnhancement>
              </sld:RedChannel>
              <sld:GreenChannel>
                <sld:SourceChannelName>2</sld:SourceChannelName>
                <sld:ContrastEnhancement>
                  <sld:Normalize>
                    <sld:VendorOption name="algorithm">StretchToMinimumMaximum</sld:VendorOption>
                    <sld:VendorOption name="minValue">2069</sld:VendorOption>
                    <sld:VendorOption name="maxValue">2846</sld:VendorOption>
                  </sld:Normalize>
                </sld:ContrastEnhancement>
              </sld:GreenChannel>
              <sld:BlueChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
                <sld:ContrastEnhancement>
                  <sld:Normalize>
                    <sld:VendorOption name="algorithm">StretchToMinimumMaximum</sld:VendorOption>
                    <sld:VendorOption name="minValue">2106</sld:VendorOption>
                    <sld:VendorOption name="maxValue">2735</sld:VendorOption>
                  </sld:Normalize>
                </sld:ContrastEnhancement>
              </sld:BlueChannel>
            </sld:ChannelSelection>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
