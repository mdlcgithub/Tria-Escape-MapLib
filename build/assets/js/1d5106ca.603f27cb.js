"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[889],{29321:e=>{e.exports=JSON.parse('{"functions":[{"name":"SetLighting","desc":"This function can to be used to change the lighting of a map mid round. We discourage usage of changing lighting\\nwith `game.Lighting[Property] = value` cause it doesnt replicate for spectators.\\n\\n**Example:**\\n```lua\\n-- Changes the fog to 100 and the fog color to white\\nlocal LightingFeature = Maplib:GetFeature(\\"Lighting\\")\\n\\nLightingFeature:SetLighting({\\n\\tFogEnd = 100,\\n\\tFogColor = Color3.fromRGB(255, 255, 255)\\n})\\n```\\n\\n:::info\\n This function also supports lighting effects to be updated and they will be replicated to specators.\\n```lua\\n-- Changes the fog to 100 and the fog color to white and makes everything monochrome.\\nlocal LightingFeature = Maplib:GetFeature(\\"Lighting\\")\\n\\nLightingFeature:SetLighting({\\n\\tFogEnd = 100,\\n\\tFogColor = Color3.fromRGB(255, 255, 255)\\n}, {\\n\\tColorCorrection = {\\n\\t\\tSaturation = -1,\\n\\t},\\n})\\n```\\n\\n:::\\n:::caution\\nFor the game to be able to edit post effects they have to be correctly placed inside the lighting folder inside settings.\\nIf they are created in a script the game will not see these and refuse to update the lighting properties.\\n:::\\n\\n:::tip\\nSince atmosphere instances don\'t have any enabled or disabled property we can get around that by parenting the instance to ReplicatedStorage\\nand then we can parent it back to lighting when we need it.\\n\\n```lua\\nlocal LightingFeature = Maplib:GetFeature(\\"Lighting\\")\\n\\n--Disables the atmosphere effect\\nLightingFeature:SetLighting({}, {\\n\\tAtmosphere = {\\n\\t\\tParent = game.ReplicateStorage,\\n\\t},\\n})\\n\\ntask.wait(5)\\n--Enables the atmosphere effect\\nLightingFeature:SetLighting({}, {\\n\\tAtmosphere = {\\n\\t\\tParent = game.Lighting,\\n\\t},\\n})\\n```\\n:::","params":[{"name":"properties","desc":"","lua_type":"{ [string]: any }"},{"name":"postEffects","desc":"","lua_type":"{ [string]: { [string]: any } }"}],"returns":[],"function_type":"method","since":"0.11","source":{"line":101,"path":"src/Features/Lighting.lua"}}],"properties":[],"types":[],"name":"Lighting","desc":"This is a MapLib Feature. It can be accessed by `MapLib:GetFeature(\\"Lighting\\")`.","source":{"line":21,"path":"src/Features/Lighting.lua"}}')}}]);