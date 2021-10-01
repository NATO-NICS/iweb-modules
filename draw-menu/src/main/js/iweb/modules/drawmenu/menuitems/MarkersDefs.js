/*
 * Copyright (c) 2008-2021, Massachusetts Institute of Technology (MIT)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
define(["iweb/CoreModule"], function(Core) { //Add shape options

  return {
    'NG': [{
        label: Core.Translate.i18nJSON('HMMWV_M998A1'),
        img:'images/drawmenu/markers/ng/HMMWV_M998A1.png'
      },{
        label: Core.Translate.i18nJSON('M915_TRACTOR_M872_40FT_FLAT_BED'),
        img:'images/drawmenu/markers/ng/M915_TRACTOR_M872_40FT_FLAT_BED.png'
      },{
        label: Core.Translate.i18nJSON('M915_TRACTOR_M872_40FT_STAKE_BED'),
        img:'images/drawmenu/markers/ng/M915_TRACTOR_M872_40FT_STAKE_BED.png'
      },{
        label: Core.Translate.i18nJSON('TRAILERCGO_LMTVDROPSIDE_M1082'),
        img:'images/drawmenu/markers/ng/TRAILERCGO_LMTVDROPSIDE_M1082.png'
      },{
        label: Core.Translate.i18nJSON('TRAILER_CGO_MTVDROPSIDE_M1095'),
        img:'images/drawmenu/markers/ng/TRAILER_CGO_MTVDROPSIDE_M1095.png'
      },{
        label: Core.Translate.i18nJSON('TRAILER_GENSET_10KW_PU798'),
        img:'images/drawmenu/markers/ng/TRAILER_GENSET_10KW_PU798.png'
      },{
        label: Core.Translate.i18nJSON('TRAILER_GENSET_15KW_PU802_30KW_PU803'),
        img:'images/drawmenu/markers/ng/TRAILER_GENSET_15KW_PU802_30KW_PU803.png'
      },{
        label: Core.Translate.i18nJSON('TRAILER_WATER_400GAL_M107A2'),
        img:'images/drawmenu/markers/ng/TRAILER_WATER_400GAL_M107A2.png'
      },{
        label: Core.Translate.i18nJSON('TRAILER_WELDING_SET'),
        img:'images/drawmenu/markers/ng/TRAILER_WELDING_SET.png'
      },{
        label: Core.Translate.i18nJSON('TRKCARGO_LMTV_M1078'),
        img:'images/drawmenu/markers/ng/TRKCARGO_LMTV_M1078.png'
      },{
        label: Core.Translate.i18nJSON('TRKCARGO_LMTV_M1078_CANVTOP'),
        img:'images/drawmenu/markers/ng/TRKCARGO_LMTV_M1078_CANVTOP.png'
      },{
        label: Core.Translate.i18nJSON('TRKCARGO_MTV_M1083'),
        img:'images/drawmenu/markers/ng/TRKCARGO_MTV_M1083.png'
      },{
        label: Core.Translate.i18nJSON('TRKCARGO_MTV_M1083_CANVTOP'),
        img:'images/drawmenu/markers/ng/TRKCARGO_MTV_M1083_CANVTOP.png'
      },{
        label: Core.Translate.i18nJSON('TRKTRACTOR_MTV_M1088'),
        img:'images/drawmenu/markers/ng/TRKTRACTOR_MTV_M1088.png'
      },{
        label: Core.Translate.i18nJSON('TRUCK_HEMTT_LHS_M977_XM1120'),
        img:'images/drawmenu/markers/ng/TRUCK_HEMTT_LHS_M977_XM1120.png'
      },{
        label: Core.Translate.i18nJSON('TRUCK_TANK_FUEL_SERVECING_HEMTT_2500GAL_M978'),
        img:'images/drawmenu/markers/ng/TRUCK_TANK_FUEL_SERVECING_HEMTT_2500GAL_M978.png'
      },{
        label: Core.Translate.i18nJSON('TRUCK_TRACTOR_LINEHAUL_M915'),
        img:'images/drawmenu/markers/ng/TRUCK_TRACTOR_LINEHAUL_M915.png'
      },{
        label: Core.Translate.i18nJSON('TRUCK_WRECKER_HEMTT_M984A1'),
        img:'images/drawmenu/markers/ng/TRUCK_WRECKER_HEMTT_M984A1.png'
      }
    ],
    'USCG':[
        {
          label: Core.Translate.i18nJSON('USCG Cutter - Large'),
          img:'images/drawmenu/markers/uscg/cutter-large.png'
        },
        {
          label: Core.Translate.i18nJSON('USCG Cutter - Buoy Tender'),
          img:'images/drawmenu/markers/uscg/cutter-buoy.png'
        },
        {
          label: Core.Translate.i18nJSON('USCG Cutter - Small'),
          img:'images/drawmenu/markers/uscg/cutter-small.png'
        },
        {
          label: Core.Translate.i18nJSON('Ship - Tanker'),
          img:'images/drawmenu/markers/uscg/tanker.png'
        },
        {
          label: Core.Translate.i18nJSON('Ship'),
          img:'images/drawmenu/markers/uscg/ship.png'
        },
        {
          label: Core.Translate.i18nJSON('Ship - Sailing'),
          img:'images/drawmenu/markers/uscg/sailboat.png'
        },
        {
          label: Core.Translate.i18nJSON('USCG - Small Boat'),
          img:'images/drawmenu/markers/uscg/uscg-boat-small.png'
        },
        {
          label: Core.Translate.i18nJSON('Small Boat'),
          img:'images/drawmenu/markers/uscg/boat-small.png'
        },
        {
          label: Core.Translate.i18nJSON('Skimmer'),
          img:'images/drawmenu/markers/uscg/skimmer.png'
        },
        {
          label: Core.Translate.i18nJSON('USCG - Rotary Wing Aircraft'),
          img:'images/drawmenu/markers/uscg/uscg-rotary.png'
        },
        {
          label: Core.Translate.i18nJSON('Rotary Wing Aircraft'),
          img:'images/drawmenu/markers/uscg/rotary.png'
        },
        {
          label: Core.Translate.i18nJSON('USCG - Fixed Wing Aircraft'),
          img:'images/drawmenu/markers/uscg/uscg-fixed.png'
        },
        {
          label: Core.Translate.i18nJSON('Fixed Wing Aircraft'),
          img:'images/drawmenu/markers/uscg/fixed.png'
        },
        {
          label: Core.Translate.i18nJSON('UAV - Fixed Wing'),
          img:'images/drawmenu/markers/uscg/uav-fixed.png'
        },
        {
          label: Core.Translate.i18nJSON('UAV - Rotary Wing'),
          img:'images/drawmenu/markers/uscg/uav-rotary.png'
        },
        {
          label: Core.Translate.i18nJSON('Hard Boom'),
          img:'images/drawmenu/markers/uscg/hard-boom.png'
        },
        {
          label: Core.Translate.i18nJSON('Fire Boom'),
          img:'images/drawmenu/markers/uscg/fire-boom.png'
        },
        {
          label: Core.Translate.i18nJSON('Sorbent Boom'),
          img:'images/drawmenu/markers/uscg/sorbent-boom.png'
        },
        {
          label: Core.Translate.i18nJSON('Snare Boom'),
          img:'images/drawmenu/markers/uscg/snare-boom.png'
        },
        {
          label: Core.Translate.i18nJSON('Hazard Origin'),
          img:'images/drawmenu/markers/uscg/hazard.png'
        },
        {
          label: Core.Translate.i18nJSON('Boat Ramp'),
          img:'images/drawmenu/markers/uscg/boat-ramp.png'
        },
        {
          label: Core.Translate.i18nJSON('Mobile Relay'),
          img:'images/drawmenu/markers/uscg/mobile-relay.png'
        },
        {
          label: Core.Translate.i18nJSON('USCG - Vehicle Deployable'),
          img:'images/drawmenu/markers/uscg/uscg-deployable.png'
        },
        {
          label: Core.Translate.i18nJSON('USCG - Vehicle'),
          img:'images/drawmenu/markers/uscg/uscg-vehicle.png'
        },
        {
          label: Core.Translate.i18nJSON('Vehicle Deployable'),
          img:'images/drawmenu/markers/uscg/deployable.png'
        },
        {
          label: Core.Translate.i18nJSON('Vehicle - Law Enforcement'),
          img:'images/drawmenu/markers/uscg/law-enforcement.png'
        },
        {
          label: Core.Translate.i18nJSON('Vehicle'),
          img:'images/drawmenu/markers/uscg/vehicle.png'
        },
        {
          label: Core.Translate.i18nJSON('Joint Information Center'),
          img:'images/drawmenu/markers/uscg/jic.png'
        },
        {
          label: Core.Translate.i18nJSON('Joint Operations Center'),
          img:'images/drawmenu/markers/uscg/joc.png'
        },
        {
          label: Core.Translate.i18nJSON('Emergency Operations Center'),
          img:'images/drawmenu/markers/uscg/eoc.png'
        },
        {
          label: Core.Translate.i18nJSON('North Cardinal'),
          img:'images/drawmenu/markers/uscg/north.png'
        },
        {
          label: Core.Translate.i18nJSON('South Cardinal'),
          img:'images/drawmenu/markers/uscg/south.png'
        },
        {
          label: Core.Translate.i18nJSON('East Cardinal'),
          img:'images/drawmenu/markers/uscg/east.png'
        },
        {
          label: Core.Translate.i18nJSON('West Cardinal'),
          img:'images/drawmenu/markers/uscg/west.png'
        },
        {
          label: Core.Translate.i18nJSON('Isolated Danger'),
          img:'images/drawmenu/markers/uscg/danger-isolated.png'
        },
        {
          label: Core.Translate.i18nJSON('Wreck'),
          img:'images/drawmenu/markers/uscg/wreck.png'
        },
        {
          label: Core.Translate.i18nJSON('Offshore Platform'),
          img:'images/drawmenu/markers/uscg/platform.png'
        },
        {
          label: Core.Translate.i18nJSON('Light'),
          img:'images/drawmenu/markers/uscg/light.png'
        },
        {
          label: Core.Translate.i18nJSON('Anchorage Small'),
          img:'images/drawmenu/markers/uscg/anchorage-small.png'
        },
        {
          label: Core.Translate.i18nJSON('Anchorage Large'),
          img:'images/drawmenu/markers/uscg/anchorage-large.png'
        },
        {
          label: Core.Translate.i18nJSON('Anchoring Prohibited'),
          img:'images/drawmenu/markers/uscg/anchoring-prohibited.png'
        },
        {
          label: Core.Translate.i18nJSON('Obstruction'),
          img:'images/drawmenu/markers/uscg/obstruction.png'
        },
        {
          label: Core.Translate.i18nJSON('Marina / Boat Harbor'),
          img:'images/drawmenu/markers/uscg/marina.png'
        },
        {
          label: Core.Translate.i18nJSON('Exposed Hazard'),
          img:'images/drawmenu/markers/uscg/hazard-exposed.png'
        }
    ],
    'ESI':[
      {
        label: Core.Translate.i18nJSON('Alcid / Pelagic Bird'),
        img:'images/drawmenu/markers/esi/bird-alcid.png'
      },
      {
        label: Core.Translate.i18nJSON('Diving Bird'),
        img:'images/drawmenu/markers/esi/bird-diving.png'
      },
      {
        label: Core.Translate.i18nJSON('Gull / Tern'),
        img:'images/drawmenu/markers/esi/bird-gull.png'
      },
      {
        label: Core.Translate.i18nJSON('Landfowl'),
        img:'images/drawmenu/markers/esi/bird-landfowl.png'
      },
      {
        label: Core.Translate.i18nJSON('Passerine Bird'),
        img:'images/drawmenu/markers/esi/bird-passerine.png'
      },
      {
        label: Core.Translate.i18nJSON('Raptor'),
        img:'images/drawmenu/markers/esi/bird-raptor.png'
      },
      {
        label: Core.Translate.i18nJSON('Shorebird'),
        img:'images/drawmenu/markers/esi/bird-shore.png'
      },
      {
        label: Core.Translate.i18nJSON('Wading Bird'),
        img:'images/drawmenu/markers/esi/bird-wading.png'
      },
      {
        label: Core.Translate.i18nJSON('Waterfowl'),
        img:'images/drawmenu/markers/esi/bird-waterfowl.png'
      },
      {
        label: Core.Translate.i18nJSON('Fish'),
        img:'images/drawmenu/markers/esi/fish.png'
      },
      {
        label: Core.Translate.i18nJSON('Bat'),
        img:'images/drawmenu/markers/esi/mmammal-bat.png'
      },
      {
        label: Core.Translate.i18nJSON('Bear / Polar Bear'),
        img:'images/drawmenu/markers/esi/mmammal-polarbear.png'
      },
      {
        label: Core.Translate.i18nJSON('Small Mammal'),
        img:'images/drawmenu/markers/esi/mmammal-small.png'
      },
      {
        label: Core.Translate.i18nJSON('Deer / Ungulate'),
        img:'images/drawmenu/markers/esi/mmammal-deer.png'
      },
      {
        label: Core.Translate.i18nJSON('Dolphin'),
        img:'images/drawmenu/markers/esi/tmammal-dolphin.png'
      },
      {
        label: Core.Translate.i18nJSON('Manatee'),
        img:'images/drawmenu/markers/esi/tmammal-manatee.png'
      },
      {
        label: Core.Translate.i18nJSON('Sea Otter / Pinniped'),
        img:'images/drawmenu/markers/esi/tmammal-otter.png'
      },
      {
        label: Core.Translate.i18nJSON('Seal / Sea Lion'),
        img:'images/drawmenu/markers/esi/tmammal-seal.png'
      },
      {
        label: Core.Translate.i18nJSON('Whale'),
        img:'images/drawmenu/markers/esi/tmammal-whale.png'
      },
      {
        label: Core.Translate.i18nJSON('Cephalopods (Squid / Octopus)'),
        img:'images/drawmenu/markers/esi/invert-cephalapod.png'
      },
      {
        label: Core.Translate.i18nJSON('Bivalves (Oyster / Clam / Mussel)'),
        img:'images/drawmenu/markers/esi/invert-bivalve.png'
      },
      {
        label: Core.Translate.i18nJSON('Crab / Invertibrate / Shellfish'),
        img:'images/drawmenu/markers/esi/invert-crab.png'
      },
      {
        label: Core.Translate.i18nJSON('Echinoderm'),
        img:'images/drawmenu/markers/esi/invert-echinoderm.png'
      },
      {
        label: Core.Translate.i18nJSON('Gastropods (Conch / Whelk / Abalone)'),
        img:'images/drawmenu/markers/esi/invert-gastropod.png'
      },
      {
        label: Core.Translate.i18nJSON('Insect'),
        img:'images/drawmenu/markers/esi/invert-insect.png'
      },
      {
        label: Core.Translate.i18nJSON('Lobster / Crayfish'),
        img:'images/drawmenu/markers/esi/invert-lobster.png'
      },
      {
        label: Core.Translate.i18nJSON('Shrimp'),
        img:'images/drawmenu/markers/esi/invert-shrimp.png'
      },
      {
        label: Core.Translate.i18nJSON('Worm'),
        img:'images/drawmenu/markers/esi/invert-worm.png'
      },
      {
        label: Core.Translate.i18nJSON('Alligator / Crocodile'),
        img:'images/drawmenu/markers/esi/reptile-alligator.png'
      },
      {
        label: Core.Translate.i18nJSON('Amphibian / Frog / Lizard / Snake / Reptile'),
        img:'images/drawmenu/markers/esi/reptile-other.png'
      },
      {
        label: Core.Translate.i18nJSON('Turtle'),
        img:'images/drawmenu/markers/esi/reptile-turtle.png'
      },
      {
        label: Core.Translate.i18nJSON('Coral / Hard Bottom Reef'),
        img:'images/drawmenu/markers/esi/flora-coral.png'
      },
      {
        label: Core.Translate.i18nJSON('Submerged Aquatic Vegetation'),
        img:'images/drawmenu/markers/esi/flora-submerged.png'
      },
      {
        label: Core.Translate.i18nJSON('Terestrial Plant'),
        img:'images/drawmenu/markers/esi/flora-terrestrial.png'
      },
      {
        label: Core.Translate.i18nJSON('Floating Aquatic Vegetation'),
        img:'images/drawmenu/markers/esi/flora-floating.png'
      },
      {
        label: Core.Translate.i18nJSON('Abandoned Vessel / Historic Wreck'),
        img:'images/drawmenu/markers/esi/wreck.png'
      },
      {
        label: Core.Translate.i18nJSON('Access'),
        img:'images/drawmenu/markers/esi/access.png'
      },
      {
        label: Core.Translate.i18nJSON('Airport'),
        img:'images/drawmenu/markers/esi/airport.png'
      },
      {
        label: Core.Translate.i18nJSON('Anchorage'),
        img:'images/drawmenu/markers/esi/anchorage.png'
      },
      {
        label: Core.Translate.i18nJSON('Aquaculture'),
        img:'images/drawmenu/markers/esi/aquaculture.png'
      },
      {
        label: Core.Translate.i18nJSON('Archeological / Religious Site'),
        img:'images/drawmenu/markers/esi/archeological-site.png'
      },
      {
        label: Core.Translate.i18nJSON('Army Corps of Engineers'),
        img:'images/drawmenu/markers/esi/army-corps.png'
      },
      {
        label: Core.Translate.i18nJSON('Artificial Reef'),
        img:'images/drawmenu/markers/esi/reef-artificial.png'
      },
      {
        label: Core.Translate.i18nJSON('Beach'),
        img:'images/drawmenu/markers/esi/beach.png'
      },
      {
        label: Core.Translate.i18nJSON('Boat Ramp'),
        img:'images/drawmenu/markers/esi/boat-ramp.png'
      },
      {
        label: Core.Translate.i18nJSON('Campground'),
        img:'images/drawmenu/markers/esi/campground.png'
      },
      {
        label: Core.Translate.i18nJSON('Coast Guard'),
        img:'images/drawmenu/markers/esi/coast-guard.png'
      },
      {
        label: Core.Translate.i18nJSON('Commercial Fishing'),
        img:'images/drawmenu/markers/esi/fishing-commercial.png'
      },
      {
        label: Core.Translate.i18nJSON('Critical Habitat'),
        img:'images/drawmenu/markers/esi/habitat-critical.png'
      },
      {
        label: Core.Translate.i18nJSON('Diving'),
        img:'images/drawmenu/markers/esi/diving.png'
      },
      {
        label: Core.Translate.i18nJSON('EPA Facility'),
        img:'images/drawmenu/markers/esi/epa-facility.png'
      },
      {
        label: Core.Translate.i18nJSON('EPA Region'),
        img:'images/drawmenu/markers/esi/epa-region.png'
      },
      {
        label: Core.Translate.i18nJSON('Equipment'),
        img:'images/drawmenu/markers/esi/equipment.png'
      },
      {
        label: Core.Translate.i18nJSON('Essential Habitat'),
        img:'images/drawmenu/markers/esi/habitat-essential.png'
      },
      {
        label: Core.Translate.i18nJSON('Facility'),
        img:'images/drawmenu/markers/esi/facility.png'
      },
      {
        label: Core.Translate.i18nJSON('Factory'),
        img:'images/drawmenu/markers/esi/factory.png'
      },
      {
        label: Core.Translate.i18nJSON('FEMA Region'),
        img:'images/drawmenu/markers/esi/fema-region.png'
      },
      {
        label: Core.Translate.i18nJSON('Ferry'),
        img:'images/drawmenu/markers/esi/ferry.png'
      },
      {
        label: Core.Translate.i18nJSON('Fishery Area'),
        img:'images/drawmenu/markers/esi/fishery.png'
      },
      {
        label: Core.Translate.i18nJSON('Heliport'),
        img:'images/drawmenu/markers/esi/heliport.png'
      },
      {
        label: Core.Translate.i18nJSON('Historical Site'),
        img:'images/drawmenu/markers/esi/historical-site.png'
      },
      {
        label: Core.Translate.i18nJSON('Invasive Species'),
        img:'images/drawmenu/markers/esi/invasive-species.png'
      },
      {
        label: Core.Translate.i18nJSON('Landfill'),
        img:'images/drawmenu/markers/esi/landfill.png'
      },
      {
        label: Core.Translate.i18nJSON('Lock and Dam'),
        img:'images/drawmenu/markers/esi/lock-dam.png'
      },
      {
        label: Core.Translate.i18nJSON('Log Storage'),
        img:'images/drawmenu/markers/esi/log-storage.png'
      },
      {
        label: Core.Translate.i18nJSON('Management Area'),
        img:'images/drawmenu/markers/esi/management-area.png'
      },
      {
        label: Core.Translate.i18nJSON('Marina'),
        img:'images/drawmenu/markers/esi/marina.png'
      },
      {
        label: Core.Translate.i18nJSON('Marine Sanctuary'),
        img:'images/drawmenu/markers/esi/marine-sanctuary.png'
      },
      {
        label: Core.Translate.i18nJSON('Military / National Guard'),
        img:'images/drawmenu/markers/esi/military.png'
      },
      {
        label: Core.Translate.i18nJSON('Mine Site'),
        img:'images/drawmenu/markers/esi/mining.png'
      },
      {
        label: Core.Translate.i18nJSON('Mooring'),
        img:'images/drawmenu/markers/esi/mooring.png'
      },
      {
        label: Core.Translate.i18nJSON('National Estuarine Research Reserve'),
        img:'images/drawmenu/markers/esi/national-estuary.png'
      },
      {
        label: Core.Translate.i18nJSON('National Forest'),
        img:'images/drawmenu/markers/esi/national-forest.png'
      },
      {
        label: Core.Translate.i18nJSON('National Landmark'),
        img:'images/drawmenu/markers/esi/national-landmark.png'
      },
      {
        label: Core.Translate.i18nJSON('National Park'),
        img:'images/drawmenu/markers/esi/national-park.png'
      },
      {
        label: Core.Translate.i18nJSON('Nature Conservancy'),
        img:'images/drawmenu/markers/esi/nature-conservancy.png'
      },
      {
        label: Core.Translate.i18nJSON('NOAA Facility'),
        img:'images/drawmenu/markers/esi/noaa-facility.png'
      },
      {
        label: Core.Translate.i18nJSON('Oil Facility'),
        img:'images/drawmenu/markers/esi/oil-facility.png'
      },
      {
        label: Core.Translate.i18nJSON('Oil Seep'),
        img:'images/drawmenu/markers/esi/oil-seep.png'
      },
      {
        label: Core.Translate.i18nJSON('Park'),
        img:'images/drawmenu/markers/esi/park.png'
      },
      {
        label: Core.Translate.i18nJSON('Platform'),
        img:'images/drawmenu/markers/esi/platform.png'
      },
      {
        label: Core.Translate.i18nJSON('Port'),
        img:'images/drawmenu/markers/esi/port.png'
      },
      {
        label: Core.Translate.i18nJSON('Recreational Fishing'),
        img:'images/drawmenu/markers/esi/fishing-recreation.png'
      },
      {
        label: Core.Translate.i18nJSON('Renewable Energy'),
        img:'images/drawmenu/markers/esi/renewable-energy.png'
      },
      {
        label: Core.Translate.i18nJSON('Repeated Measurement Site'),
        img:'images/drawmenu/markers/esi/measurement-site.png'
      },
      {
        label: Core.Translate.i18nJSON('Staging'),
        img:'images/drawmenu/markers/esi/staging.png'
      },
      {
        label: Core.Translate.i18nJSON('State Protected Area'),
        img:'images/drawmenu/markers/esi/state-protected-area.png'
      },
      {
        label: Core.Translate.i18nJSON('Storm Surge Inundation Area'),
        img:'images/drawmenu/markers/esi/storm-surge-area.png'
      },
      {
        label: Core.Translate.i18nJSON('Subsistence Fishing'),
        img:'images/drawmenu/markers/esi/fishing-subsistence.png'
      },
      {
        label: Core.Translate.i18nJSON('Surfing'),
        img:'images/drawmenu/markers/esi/surfing.png'
      },
      {
        label: Core.Translate.i18nJSON('Tribal Land'),
        img:'images/drawmenu/markers/esi/tribal-land.png'
      },
      {
        label: Core.Translate.i18nJSON('Tsunami Inundation Area'),
        img:'images/drawmenu/markers/esi/tsunami-area.png'
      },
      {
        label: Core.Translate.i18nJSON('Washover'),
        img:'images/drawmenu/markers/esi/washover.png'
      },
      {
        label: Core.Translate.i18nJSON('Waste Disposal'),
        img:'images/drawmenu/markers/esi/waste-disposal.png'
      },
      {
        label: Core.Translate.i18nJSON('Water Intake'),
        img:'images/drawmenu/markers/esi/intake.png'
      },
      {
        label: Core.Translate.i18nJSON('Wildlife Refuge'),
        img:'images/drawmenu/markers/esi/refuge.png'
      }
    ],
    'ICS':[  
             {  
                 label: Core.Translate.i18nJSON('Fire Origin'),
                 img:'images/drawmenu/markers/fire_origin2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Incident Command Post'),
                 img:'images/drawmenu/markers/icp.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Incident Base'),
                 img:'images/drawmenu/markers/incident_base2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Camp'),
                 img:'images/drawmenu/markers/camp.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Staging Area'),
                 img:'images/drawmenu/markers/staging_area2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Water Source'),
                 img:'images/drawmenu/markers/water_source2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Division Break'),
                 img:'images/drawmenu/markers/division_break2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Branch Break'),
                 img:'images/drawmenu/markers/branch_break2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Zone Break'),
                 img:'images/drawmenu/markers/zone-break.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Hot Spot'),
                 img:'images/drawmenu/markers/hot_spot2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Drop Point'),
                 img:'images/drawmenu/markers/dry_point2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Spot Fire'),
                 img:'images/drawmenu/markers/heat_source2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('MediVac Site'),
                 img:'images/drawmenu/markers/medivac.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Helibase'),
                 img:'images/drawmenu/markers/helibase2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Helispot'),
                 img:'images/drawmenu/markers/helispot.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Life Hazard'),
                 img:'images/drawmenu/markers/life-hazard.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Safety Zone'),
                 img:'images/drawmenu/markers/safety-zone.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Aerial Hazard'),
                 img:'images/drawmenu/markers/aerial-hazard.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Repeater, Mobile Relay'),
                 img:'images/drawmenu/markers/repeater_mobile_relay2.png'
             },
             {  
                 label: Core.Translate.i18nJSON('IR Downlink'),
                 img:'images/drawmenu/markers/ir-downlink.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Wind Direction'),
                 img:'images/drawmenu/markers/wind.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Aerial Ignition'),
                 img:'images/drawmenu/markers/aerial_ignition.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fire Station'),
                 img:'images/drawmenu/markers/F-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('First Aid Station'),
                 img:'images/drawmenu/markers/first_aid.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Lookout'),
                 img:'images/drawmenu/markers/flag-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Segment Break'),
                 img:'images/drawmenu/markers/segment-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Telephone'),
                 img:'images/drawmenu/markers/T-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Mobile Weather Unit'),
                 img:'images/drawmenu/markers/X-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/0.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/1.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/2.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/3.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/4.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/5.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/6.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/7.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/8.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/9.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/a.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/b.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/c.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/d.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/e.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/f.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/g.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/h.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/i.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/j.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/k.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/l.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/m.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/n.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/o.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/p.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/q.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/r.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/s.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/t.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/u.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/v.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/w.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/x.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/y.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/z.png'
             },
             {  
                 label: Core.Translate.i18nJSON(''),
                 img:'images/drawmenu/markers/small_x.png'
             },
             {  
                 label: Core.Translate.i18nJSON('NWCG – Defensible – Standalone <br/> CA-FIRESCOPE - Not Threatened'),
                 img:'images/drawmenu/markers/defensible_standalone_map.png'
             },
             {  
                 label: Core.Translate.i18nJSON('NWCG – Defensible – Prep and Hold <br/> CA-FIRESCOPE - Threated Defensible'),
                 img:'images/drawmenu/markers/defensible_prep_and_hold_map.png'
             },
             {  
                 label: Core.Translate.i18nJSON('NWCG – Non-Defensible – Prep and Leave <br/> CA-FIRESCOPE - Not Applicable'),
                 img:'images/drawmenu/markers/non-defensible_prep_and_leave_map.png'
             },
             {  
                 label: Core.Translate.i18nJSON('NWCG – Non-Defensible – Rescue Drive-By <br/> CA-FIRESCOPE - Threated Non-Defensible'),
                 img:'images/drawmenu/markers/non-defensible_rescue_drive-by_map.png'
             }
         ],
         "Incident":[  
             {  
                 label: Core.Translate.i18nJSON('Civil Disturbance'),
                 img:'images/drawmenu/markers/Civil_Disturbance_Theme_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Criminal Activity Incident'),
                 img:'images/drawmenu/markers/Criminal_Activity_Theme_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Bomb Threat'),
                 img:'images/drawmenu/markers/Crime_Bomb_Threat_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Shooting'),
                 img:'images/drawmenu/markers/Crime_Shooting.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fire Incident'),
                 img:'images/drawmenu/markers/Fire_Theme.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Hazardous Material Incident'),
                 img:'images/drawmenu/markers/Hazmat_Hazardous_Theme.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Air Incident'),
                 img:'images/drawmenu/markers/Transport_Air_Theme.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Marine Incident'),
                 img:'images/drawmenu/markers/Transport_Marine_Theme.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Rail Incident'),
                 img:'images/drawmenu/markers/Transport_Rail_Theme.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Vehicle Incident'),
                 img:'images/drawmenu/markers/Transport_Vehicle_Theme.png'
             },
             {  
                 label: Core.Translate.i18nJSON('After Shock'),
                 img:'images/drawmenu/markers/Geo_After_Shock.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Earth Quake Epicenter'),
                 img:'images/drawmenu/markers/Geo_Earth_Quake_Epicenter.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Landslide'),
                 img:'images/drawmenu/markers/Geo_Landslide.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Subsidence'),
                 img:'images/drawmenu/markers/Geo_Subsidence.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Flood'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Flood.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fog'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Fog.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Hail'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Hail.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Rain'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Rain.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Snow'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Snow.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Thunderstorm'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Thunder_Storm.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Tornado'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Tornado_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Tropical Cyclone'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Tropical_Cyclone.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Tsunami'),
                 img:'images/drawmenu/markers/Hydro_Meteor_Tsunami_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Military Soldier'),
                 img:'images/drawmenu/markers/mil_soldier.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Military Vehicle'),
                 img:'images/drawmenu/markers/mil_vehicle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency medical Operation'),
                 img:'images/drawmenu/markers/E_Med_Emergency_Medical_Theme_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('EMT Station Location'),
                 img:'images/drawmenu/markers/E_Med_EMT_Station_Locations_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Ambulance'),
                 img:'images/drawmenu/markers/E_Med_Ambulance_S1_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Medical Evacuation Helicopter Station'),
                 img:'images/drawmenu/markers/E_Med_Evacuation_Helicopter_Station_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Health Department Facility'),
                 img:'images/drawmenu/markers/E_Med_Health_Department_Facility_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Hospital'),
                 img:'images/drawmenu/markers/E_Med_Hospital_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Hospital Ship'),
                 img:'images/drawmenu/markers/E_Med_Hospital_Ship_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Medical facilities Out Patient'),
                 img:'images/drawmenu/markers/E_Med_Medical_Facilities_Out_Patient_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Morgue'),
                 img:'images/drawmenu/markers/E_Med_Morgue_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Pharmacies'),
                 img:'images/drawmenu/markers/E_Med_Pharmacies_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Triage'),
                 img:'images/drawmenu/markers/E_Med_Triage_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Operation'),
                 img:'images/drawmenu/markers/Emergency_Operations_Theme_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Collection Evacuation Point'),
                 img:'images/drawmenu/markers/Emergency_Collection_Evacuation_Point_S1_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Incident Command Center'),
                 img:'images/drawmenu/markers/Emergency_Incident_Command_Center_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Operations Center'),
                 img:'images/drawmenu/markers/Emergency_Operations_Center_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Public Information Center'),
                 img:'images/drawmenu/markers/Emergency_Public_Information_Center_S1_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Shelters'),
                 img:'images/drawmenu/markers/Emergency_Shelters_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Staging Area'),
                 img:'images/drawmenu/markers/Emergency_Staging_Areas_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency teams'),
                 img:'images/drawmenu/markers/Emergency_Teams_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Water Distribution Center'),
                 img:'images/drawmenu/markers/Emergency_Water_Distribution_Center_S1_ch.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Emergency Food Distribution Center'),
                 img:'images/drawmenu/markers/Emgergency_Food_Distribution_Centers_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fire Suppression Operation'),
                 img:'images/drawmenu/markers/Fire_Suppression_Theme_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fire Hydrant'),
                 img:'images/drawmenu/markers/Fire_Hydrant_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Other Water Supply Location'),
                 img:'images/drawmenu/markers/Fire_Other_Water_Supply_Location_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fire Station'),
                 img:'images/drawmenu/markers/Fire_Station_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Law Enforcement Operation'),
                 img:'images/drawmenu/markers/Law_Enforcement_Theme_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('ATF'),
                 img:'images/drawmenu/markers/Law_ATF_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Border Patrol'),
                 img:'images/drawmenu/markers/Law_Border_Patrol_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Customs Service'),
                 img:'images/drawmenu/markers/Law_Customs_Service_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('DEA'),
                 img:'images/drawmenu/markers/Law_DEA_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('DOJ'),
                 img:'images/drawmenu/markers/Law_DOJ_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('FBI'),
                 img:'images/drawmenu/markers/Law_FBI_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Police'),
                 img:'images/drawmenu/markers/Law_Police_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Prison'),
                 img:'images/drawmenu/markers/Law_Prison_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Secret Service'),
                 img:'images/drawmenu/markers/Law_Secret_Service_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('TSA'),
                 img:'images/drawmenu/markers/Law_TSA_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('US Coast Guard'),
                 img:'images/drawmenu/markers/Law_US_Coast_Guard_S1.png'
             },
             {  
                 label: Core.Translate.i18nJSON('US Marshals Service'),
                 img:'images/drawmenu/markers/Law_US_Marshall_S1.png'
             }
         ],
         'CST':[  
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Incident.png',
                 label: Core.Translate.i18nJSON('Incident')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Infrastructure_S1.png',
                 label: Core.Translate.i18nJSON('Infrastructure S1')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Infrastructure_S2.png',
                 label: Core.Translate.i18nJSON('Infrastructure S2')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Infrastructure_S3.png',
                 label: Core.Translate.i18nJSON('Infrastructure S3')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Infrastructure_S4.png',
                 label: Core.Translate.i18nJSON('Infrastructure S4')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Natural_Event.png',
                 label: Core.Translate.i18nJSON('Natural Event')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Operation_S1.png',
                 label: Core.Translate.i18nJSON('Operation S1')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Operation_S2.png',
                 label: Core.Translate.i18nJSON('Operation S2')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Operation_S3.png',
                 label: Core.Translate.i18nJSON('Operation S3')
             },
             {  
                 img:'images/drawmenu/markers/hsi/DamageOperational/Operation_S4.png',
                 label: Core.Translate.i18nJSON('Operation S4')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Blank_Incident_A.png',
                 label: Core.Translate.i18nJSON('Blank incident')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Blank_Incident_B.png',
                 label: Core.Translate.i18nJSON('Blank incident')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Civil_Demonstrations_ch.png',
                 label: Core.Translate.i18nJSON('Civil Demonstrations')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Civil_Displaced_Population_ch.png',
                 label: Core.Translate.i18nJSON('Civil Displaced Population')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Civil_Disturbance_Theme_ch.png',
                 label: Core.Translate.i18nJSON('Civil Disturbance')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Civil_Rioting_ch.png',
                 label: Core.Translate.i18nJSON('Civil Rioting')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Crime_Bomb_ch.png',
                 label: Core.Translate.i18nJSON('Bomb')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Crime_Bomb_Explosion_ch.png',
                 label: Core.Translate.i18nJSON('Bomb Explosion')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Crime_Bomb_Threat_ch.png',
                 label: Core.Translate.i18nJSON('Bomb Threat')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Crime_Looting.png',
                 label: Core.Translate.i18nJSON('Looting')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Crime_Poisoning.png',
                 label: Core.Translate.i18nJSON('Poisoning')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Crime_Shooting.png',
                 label: Core.Translate.i18nJSON('Shooting crime')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Criminal_Activity_Theme_ch.png',
                 label: Core.Translate.i18nJSON('Criminal Activity')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_Hotspot.png',
                 label: Core.Translate.i18nJSON('Fire Hotspot')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_Non_Residential_ch.png',
                 label: Core.Translate.i18nJSON('Non Residential Fire')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_Origin_ch.png',
                 label: Core.Translate.i18nJSON('Fire Origin')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_Residential_ch.png',
                 label: Core.Translate.i18nJSON('Residential Fire')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_School_ch.png',
                 label: Core.Translate.i18nJSON('School Fire')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_Smoke_ch.png',
                 label: Core.Translate.i18nJSON('Smoke')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_Special_Needs.png',
                 label: Core.Translate.i18nJSON('Special Needs Fire')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_Theme.png',
                 label: Core.Translate.i18nJSON('Fire')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Fire_Wild_ch.png',
                 label: Core.Translate.i18nJSON('Wild Fire')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Chemical_Agents.png',
                 label: Core.Translate.i18nJSON('Chemical Agents')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Corrosive_Material.png',
                 label: Core.Translate.i18nJSON('Corrosive Material')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Dangerous_When_Wet.png',
                 label: Core.Translate.i18nJSON('Dangerous When Wet')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Explosive.png',
                 label: Core.Translate.i18nJSON('Explosive')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Flammable_Gas.png',
                 label: Core.Translate.i18nJSON('Flammable Gas')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Flammable_Liquid.png',
                 label: Core.Translate.i18nJSON('Flammable Liquid')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Flammable_Solid.png',
                 label: Core.Translate.i18nJSON('Flammable Solid')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Hazardous_Theme.png',
                 label: Core.Translate.i18nJSON('Hazardous')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Non-Flammable_Gas.png',
                 label: Core.Translate.i18nJSON('Non-Flammable Gas')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Organic_Peroxides.png',
                 label: Core.Translate.i18nJSON('Organic Peroxies')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Radioactive_Material_ch.png',
                 label: Core.Translate.i18nJSON('Radioactive Maerial')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Spontaneously_Combustible.png',
                 label: Core.Translate.i18nJSON('Spontaneously Combustible')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Toxic_and_Infectious.png',
                 label: Core.Translate.i18nJSON('Toxic and Infectious')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Oxidizers.png',
                 label: Core.Translate.i18nJSON('Oxidizers')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Toxic_Gas.png',
                 label: Core.Translate.i18nJSON('Toxic Gas')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Hazmat_Unexploded_Ordnance.png',
                 label: Core.Translate.i18nJSON('Unexploded Ordnance')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Air_Accident.png',
                 label: Core.Translate.i18nJSON('Air Accident')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Air_Hijacking.png',
                 label: Core.Translate.i18nJSON('Air Hijacking')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Air_Theme.png',
                 label: Core.Translate.i18nJSON('Air')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Marine_Accident.png',
                 label: Core.Translate.i18nJSON('Marine Accident')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Marine_Hijacking.png',
                 label: Core.Translate.i18nJSON('Marine Hijacking')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Marine_Theme.png',
                 label: Core.Translate.i18nJSON('Marine')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Rail_Accident.png',
                 label: Core.Translate.i18nJSON('Rail Accident')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Rail_Hijacking.png',
                 label: Core.Translate.i18nJSON('Rail Hijacking')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Rail_Theme.png',
                 label: Core.Translate.i18nJSON('Rail')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Vehicle_Accident.png',
                 label: Core.Translate.i18nJSON('Vehicle Accident')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Vehicle_Hijacking.png',
                 label: Core.Translate.i18nJSON('Vehicle Hijacking')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Incidents/Transport_Vehicle_Theme.png',
                 label: Core.Translate.i18nJSON('Vehicle')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Agricultural_Laboratories_S1.png',
                 label: Core.Translate.i18nJSON('Agricultural Laboratories S1')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Agricultural_Laboratories_S2.png',
                 label: Core.Translate.i18nJSON('Agricultural Laboratories S2')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Agricultural_Laboratories_S3.png',
                 label: Core.Translate.i18nJSON('Agricultural Laboratories S3')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Agricultural_Laboratories_S4.png',
                 label: Core.Translate.i18nJSON('Agricultural Laboratories S4')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Animal_Feedlots_S1.png',
                 label: Core.Translate.i18nJSON('Animal Feedlots S1')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Animal_Feedlots_S2.png',
                 label: Core.Translate.i18nJSON('Animal Feedlots S2')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Animal_Feedlots_S3.png',
                 label: Core.Translate.i18nJSON('Animal Feedlots S3')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Agri_Animal_Feedlots_S4.png',
                 label: Core.Translate.i18nJSON('Animal Feedlots S4')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Bank_Financial_Exchanges_S1.png',
                 label: Core.Translate.i18nJSON('Financial Exchanges S1')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Bank_Financial_Exchanges_S2.png',
                 label: Core.Translate.i18nJSON('Financial Exchanges S2')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Bank_Financial_Exchanges_S3.png',
                 label: Core.Translate.i18nJSON('Financial Exchanges S3')
             },
             {  
                 img:'images/drawmenu/markers/hsi/Infrastructure/Bank_Financial_Exchanges_S4.png',
                 label: Core.Translate.i18nJSON('Financial Exchanges S4')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Blank_Natural_Event_A.png',
                 label: Core.Translate.i18nJSON('Natural Event A')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Blank_Natural_Event_B.png',
                 label: Core.Translate.i18nJSON('Natural Event B')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_After_Shock.png',
                 label: Core.Translate.i18nJSON('After Shock')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Avalanche_ch.png',
                 label: Core.Translate.i18nJSON('Avalanche')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Earth_Quake_Epicenter.png',
                 label: Core.Translate.i18nJSON('Earth Quake Epicenter')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Landslide.png',
                 label: Core.Translate.i18nJSON('Landslide')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Subsidence.png',
                 label: Core.Translate.i18nJSON('Subsidence')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Volcanic_Eruption.png',
                 label: Core.Translate.i18nJSON('Volcanic Eruption')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Geo_Volcanic_Threat.png',
                 label: Core.Translate.i18nJSON('Volcanic threat')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Drizzle.png',
                 label: Core.Translate.i18nJSON('Drizzle')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Drought.png',
                 label: Core.Translate.i18nJSON('Drought')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Flood.png',
                 label: Core.Translate.i18nJSON('Flood')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Fog.png',
                 label: Core.Translate.i18nJSON('Fog')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Hail.png',
                 label: Core.Translate.i18nJSON('Hail')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Inversion.png',
                 label: Core.Translate.i18nJSON('Inversion')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Rain.png',
                 label: Core.Translate.i18nJSON('Rain')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Sand_Dust_Storm.png',
                 label: Core.Translate.i18nJSON('Sand Dust')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Snow.png',
                 label: Core.Translate.i18nJSON('Snow')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Thunder_Storm.png',
                 label: Core.Translate.i18nJSON('Thunder Storm')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Tornado_ch.png',
                 label: Core.Translate.i18nJSON('Tornado')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Tropical_Cyclone.png',
                 label: Core.Translate.i18nJSON('Cyclone')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Hydro_Meteor_Tsunami_ch.png',
                 label: Core.Translate.i18nJSON('Tsunami')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Infestation_Bird_ch.png',
                 label: Core.Translate.i18nJSON('Bird Infestation')
             },
             {  
                 img:'images/drawmenu/markers/hsi/NaturalEvents/Infestation_Insect.png',
                 label: Core.Translate.i18nJSON('Insect Infestation')
             }
         ],
         'Friendly Unit':[  
             {  
                 label: Core.Translate.i18nJSON('COMBAT ARMS - Aviation'),
                 img:'images/drawmenu/markers/friendly/CST-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT ARMS - Engineer'),
                 img:'images/drawmenu/markers/friendly/engineer-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT ARMS - Field Artillery'),
                 img:'images/drawmenu/markers/friendly/basic-towed-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT ARMS - Infantry'),
                 img:'images/drawmenu/markers/friendly/infantry-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT ARMS - Special Forces'),
                 img:'images/drawmenu/markers/friendly/specialforces-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT SUPPORT - Aviation'),
                 img:'images/drawmenu/markers/friendly/cs-aviation.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT SUPPORT - Chemical'),
                 img:'images/drawmenu/markers/friendly/basic-chem-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT SUPPORT - Military Intelligence'),
                 img:'images/drawmenu/markers/friendly/militaryintel-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT SUPPORT - Military Police'),
                 img:'images/drawmenu/markers/friendly/militarypolice-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('COMBAT SUPPORT - Signal'),
                 img:'images/drawmenu/markers/friendly/comm-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Civil Affairs'),
                 img:'images/drawmenu/markers/friendly/civil_affairs.png'
             },
             {  
                 label: Core.Translate.i18nJSON('EOD'),
                 img:'images/drawmenu/markers/friendly/EOD.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fixed Wing'),
                 img:'images/drawmenu/markers/friendly/fixed_wing.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Mechanical Infantry'),
                 img:'images/drawmenu/markers/friendly/mech_infantry.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Medical'),
                 img:'images/drawmenu/markers/friendly/medical.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Medical Facility'),
                 img:'images/drawmenu/markers/friendly/medical_facility.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Military Exploitation UAV'),
                 img:'images/drawmenu/markers/friendly/mil_exploitation_uav.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Mobility Enhancement'),
                 img:'images/drawmenu/markers/friendly/mobility_enhancement.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Motor Transport'),
                 img:'images/drawmenu/markers/friendly/motor_transport.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Motorized Infantry'),
                 img:'images/drawmenu/markers/friendly/motorized_infantry.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Motorized Scouts'),
                 img:'images/drawmenu/markers/friendly/motorized_scouts.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Psyop'),
                 img:'images/drawmenu/markers/friendly/psyop.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Recon Cav'),
                 img:'images/drawmenu/markers/friendly/recon_cav.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Striver Lav'),
                 img:'images/drawmenu/markers/friendly/striker_lav.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Supply'),
                 img:'images/drawmenu/markers/friendly/supply.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Supply Trains'),
                 img:'images/drawmenu/markers/friendly/supply_trains.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Supply Transport'),
                 img:'images/drawmenu/markers/friendly/supply_transport.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Survey Team'),
                 img:'images/drawmenu/markers/friendly/survey_team.png'
             }
         ],
         'Resource':[  
             {  
                 label: Core.Translate.i18nJSON('Bn Medical Section'),
                 img:'images/drawmenu/markers/sig_sup_serv/bn_med_section.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class I'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_i.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class I Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_i_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class II'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_ii.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class II Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_ii_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class III'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_iii.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class III Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_iii_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class IV'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_iv.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class IV Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_iv_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class IX'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_ix.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class IX Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_ix_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class V'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_v.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class V Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_v_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class VI'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_vi.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class VI Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_vi_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class VII'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_vii.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class VII Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_vii_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class VIII'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_viii.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class VIII Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_viii_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class X'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_x.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Class X Circle'),
                 img:'images/drawmenu/markers/sig_sup_serv/class_x_circle.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fld Cbt Trains'),
                 img:'images/drawmenu/markers/sig_sup_serv/fld_cbt_trains.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Mortuary'),
                 img:'images/drawmenu/markers/sig_sup_serv/mortuary.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Point'),
                 img:'images/drawmenu/markers/sig_sup_serv/point.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Point Maintenance'),
                 img:'images/drawmenu/markers/sig_sup_serv/point_maintenance.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Water'),
                 img:'images/drawmenu/markers/sig_sup_serv/water.png'
             }
         ],
         'Mission':[  
             {  
                 label: Core.Translate.i18nJSON('Structure No Damage: Low Risk, low probability of further collapse'),
                 img:'images/drawmenu/markers/usar/structure-no-damage.png'
             },
             {  
                 label: Core.Translate.i18nJSON('CBRN'),
                 img:'images/drawmenu/markers/mission/CBRN-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Communications'),
                 img:'images/drawmenu/markers/mission/communications-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Engineering'),
                 img:'images/drawmenu/markers/mission/engineering-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Logistics'),
                 img:'images/drawmenu/markers/mission/logistics-01.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Medical'),
                 img:'images/drawmenu/markers/mission/medical.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Security'),
                 img:'images/drawmenu/markers/mission/security.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Transportation'),
                 img:'images/drawmenu/markers/mission/transportation.png'
             }
         ],
         'USAR':[  
             {  
                 label: Core.Translate.i18nJSON('Structure No Damage: Low Risk, low probability of further collapse'),
                 img:'images/drawmenu/markers/usar/structure-no-damage.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Structure Damaged: Medium Risk, structure is moderately damaged'),
                 img:'images/drawmenu/markers/usar/structure-damaged.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Structure Failed: High Risk, may be subject to sudden collapse'),
                 img:'images/drawmenu/markers/usar/structure-failed.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Structure Destroyed: Complete destruction of structure'),
                 img:'images/drawmenu/markers/usar/structure-destroyed.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Assisted: Material assistance provided to residents'),
                 img:'images/drawmenu/markers/usar/assisted.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Evacuated: Survivors transported to collection point'),
                 img:'images/drawmenu/markers/usar/evacuated.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Rescued: Technical rescue that required physical intervention'),
                 img:'images/drawmenu/markers/usar/rescued.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Follow-Up Form: Additional information required not adequately described by symbol set'),
                 img:'images/drawmenu/markers/usar/followup-form.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Victim Detected: Potential victim detected (including canine alert or intelligence)'),
                 img:'images/drawmenu/markers/usar/victim-detected.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Confirmed Victim: Confirmed live survivor (visual, audible, physical confirmation)'),
                 img:'images/drawmenu/markers/usar/confirmed-victim.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Human Remains: Confirmed victim determined to be deceased'),
                 img:'images/drawmenu/markers/usar/human-remains.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Human Remains Removed: Human remains removed from specific location'),
                 img:'images/drawmenu/markers/usar/human-remains-removed.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Shelter in Place: Survivors have chosen to remain at location'),
                 img:'images/drawmenu/markers/usar/shelter-in-place.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Animal Issue: Issue including aggression, location, assistance needed, etc'),
                 img:'images/drawmenu/markers/usar/animal-issue.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Fire Incident: General fire occurrence'),
                 img:'images/drawmenu/markers/usar/fire-incident.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Hazardous Material Incident: Nuclear, biological, or chemical incident'),
                 img:'images/drawmenu/markers/usar/hazardous-material-incident.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Targeted Search: Specific location or condition requiring increased search effort'),
                 img:'images/drawmenu/markers/usar/targeted-search.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Flood/Water Level: Predetermined site for documentation of water line'),
                 img:'images/drawmenu/markers/usar/flood-water-level.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Helicopter Landing Site: Appropriate site for landing zone'),
                 img:'images/drawmenu/markers/usar/helicopter-landing-site.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Route Blocked: Inaccessible route by land or water'),
                 img:'images/drawmenu/markers/usar/route-blocked.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Extra 21: Mission specific placeholder to be determined (e.g. abandoned vehicle, commercial structure, evidence)'),
                 img:'images/drawmenu/markers/usar/extra-21.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Extra 22: Mission specific placeholder to be determined'),
                 img:'images/drawmenu/markers/usar/extra-22.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Extra 23: Mission specific placeholder to be determined'),
                 img:'images/drawmenu/markers/usar/extra-23.png'
             },
             {  
                 label: Core.Translate.i18nJSON('Extra 24: Mission specific placeholder to be determined'),
                 img:'images/drawmenu/markers/usar/extra-24.png'
             }
          ],
        'Wild Fires (HR)': [{
            label: '',
            img: 'images/drawmenu/markers/wildfire/1.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/2.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/3.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/4.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/5.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/6.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/7.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/8.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/9.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/10.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/11.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/12.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/13.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/14.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/15.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/16.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/17.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/18.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/19.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/20.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/21.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/22.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/23.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/24.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/25.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/26.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/27.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/28.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/29.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/30.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/31.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/32.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/33.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/34.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/35.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/36.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/37.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/38.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/39.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/40.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/41.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/42.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/43.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/44.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/45.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/46.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/47.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/48.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/49.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/50.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/51.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/52.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/53.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/54.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/55.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/56.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/57.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/58.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/59.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/60.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/61.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/62.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/63.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/64.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/65.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/66.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/67.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/68.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/69.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/70.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/71.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/72.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/73.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/74.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/75.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/76.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/77.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/78.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/79.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/80.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/81.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/82.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/83.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/84.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/85.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/86.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/87.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/88.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/89.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/90.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/91.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/92.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/93.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/94.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/95.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/96.png'
          }, {
            label: '',
            img: 'images/drawmenu/markers/wildfire/97.png'
        }],
      'UN OCHA' :[
        { label: '', img: 'images/drawmenu/markers/unocha/Abduction-kidnapping.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/About.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Add-document.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Add.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Advocacy.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Affected-population.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Agile.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Agriculture.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Airport-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Airport-closed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Airport-destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Airport-military.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Airport-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Airport.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Alert.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Analysis.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Apps.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Arrest-detention.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Assault.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Assembly-point.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Assessment.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Attack.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bacteria.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Blanket.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Blog.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Boat.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bookmark.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Border-closed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Border-crossing.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Borehole.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bottled-water.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bridge-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bridge-closed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bridge-destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bridge-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bridge.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bucket.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Buddhist-temple.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Building-closed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Building-facility-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Building-facility-destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Building-facility-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Building.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Bus.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Calendar.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Camp-Coordination-and-Camp-Management.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Carjacking.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Car.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Case-management.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Cash-transfer.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Cell-tower.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Chart.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Chat.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Checked-mail.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Checkpoint.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Child-care-child-friendly.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Child-combatant.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Child-protection.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Children.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Church.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Civil-military-coordination.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Clinic.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Clothing.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Cold-wave.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Communal-latrine.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Community-building.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Community-engagement.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Computer.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Confined.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Conflict.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Coordinated-assessment.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Coordination.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Copy.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Country.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/COVID-19.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/CSV-file.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Cyclone.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Damaged-Affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Dangerous-area.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Data.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Dead.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Debris-management.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Delete-account.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Deployment.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Detergent.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Diplomatic-mission.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Distribution-site.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Doctor.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Document.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/DOCX-file.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Download.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Down.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Drought.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Drowned.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Early-Recovery.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Earthmound.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Earthquake.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Edit.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Education.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Elderly.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/E-mail.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Emergency-Telecommunications.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Environment.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Epidemic.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Exit-Cancel.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Expand-down.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Expand-left.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Expand-right.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Expand-up.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Famine.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Favourite.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Fax.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Ferry.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Film.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Filter.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Financing.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Fire.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Fishery.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Flash-flood.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Flood.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Flour.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Folder.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Food.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Food-Security.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Food-warehouse.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Forced-entry.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Forced-recruitment.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Fund.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Gap_analysis.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Gas-station.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Gender-based-violence.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Gender.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Go.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Government-office.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Group.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Handwashing.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Harassment-intimidation.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Health-facility-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Health-facility-destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Health-facility-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Health-facility.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Health.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Health-post.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Health-worker.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Heatwave.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Heavy-rain.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Helicopter.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Helipad.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Help.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Hidden.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Hindu-temple.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Hospital-bed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Hospital.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Hotel.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/House-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/House-burned.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/House-destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/House-lockdown.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/House-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/House.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Humanitarian-access.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Humanitarian-programme-cycle.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/IDP-refugee-camp.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Indigenous people.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Infant.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Infected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Infection-control.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Information-management.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Information-technology.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Infrastructure.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Injured.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Innovation.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Insect-infestation.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Internally-displaced.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Internet.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Kitchen-set.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Laboratory.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Landslide-mudslide.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Laptop.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Latrine-cabin.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Leadership.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Learning.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Life-saving.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Link.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Livelihood.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Livestock.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Location-lockdown.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Location.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Locust-infestation.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Logistics.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Map.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Market-closed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Market.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Mask.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Mattress.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Medical-supply.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Medicine.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Meeting.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Menu.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Military-gate.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Mine.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Missing.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Mobile-clinic.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Mobile-phone.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Monitoring.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Monitor.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/More-options.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Mosque.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Mosquito-net.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Multi-cluster-sector.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Murder.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/National-army.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Needs-assessment.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Next-item.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/NGO-office.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Non-food-items-2.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Non-food-items.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Notification.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Not-infected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Not-secured.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Nutrition.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Observation-tower.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Oil-facility.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Oil.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Out-of-platform.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Partnership.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Password.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Pause.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/PDF-file.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Peacekeeping-force.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/People-in-need.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/People-targeted.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/People-with-physical-impairments.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Permanent-camp.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Person-1.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Person-2.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Photo.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Physical-closure.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Physical-distancing.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Plastic-sheeting.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Police-station.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Policy.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Population-growth.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Population-return.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Port-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Port-closed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Port-destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Port-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Port.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Potable-water.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Potable-water-source.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Poverty.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Power-electricity-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Power-electricity-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Power-electricity.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Power-outage.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Pregnant.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Preparedness.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Previous-item.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Print.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Protection.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Public-information.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Radio.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Rebel.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Reconstruction.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Refugee.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Registration.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Relief-goods.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Remote-support.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Remove-document.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Remove.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Reporting.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Report.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Resilence.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Respiratory.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Response.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Return.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Rice.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Road-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Road-barrier.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Roadblock.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Road-closed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Road-destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Road-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Road.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Robbery.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Rule-of-law-and-justice.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Rural-exodus.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Rural.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Safety-and-security.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Salt.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Sanitation.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Sanitizer.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Satellite-dish.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Save.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Scale-down-operation.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Scale-up-operation.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/School-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/School-closed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/School-destroyed.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/School-not-affected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/School.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Search-and-rescue.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Search.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Secured.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Security.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/See.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Selected.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Services-and-tools.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Settings.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Sexual-and-reproductive health.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Sexual-violence.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Share.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Shelter.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Ship.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Shower.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Smartphone.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Snow-avalanche.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Snowfall.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Soap.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Solid-waste.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Spontaneous-site.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Spring-water.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Staff-management.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Stop.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Storm.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Storm-surge.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Stove.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Submersible-pump.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Sugar.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Table.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Tarpaulin.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Technological-disaster.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Temporary-camp.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Tent.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Testing.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Time.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Toilet.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Top-ranking.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Tornado.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Trade-and-market.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Training.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Train.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Transition-site.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Trending.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Truck.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Tsunami.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Tunnel.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/UN-compound-office.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/University.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/UN-vehicle.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Upload.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Up.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Urban.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Urban-rural.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/User.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Users.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Vaccine.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Validate-account.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Ventilator.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Video-.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Violent-wind.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Virus.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Volcano.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Walkie-talkie.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Warning-Error.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Water-Sanitation-and-Hygiene.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Water-source.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Water-trucking.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Work-from-home.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/Worm-infestation.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/XLSX-file.png'},
        { label: '', img: 'images/drawmenu/markers/unocha/ZIP-compressed.png'}
      ],
    'IFRC - Clusters':[{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_camp_management_coordniation_noun_4210-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_education_noun_4212-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_emergency_telecoms_noun_4213-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_food_security_noun_4214-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_health_noun_4215-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_logistics_noun_4216-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_nutrition_noun_4217-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_other_agriculture_noun_4221-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_protection_noun_4218-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_recovery_noun_4211-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_shelter_noun_4219-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/01_clusters_water_sanitation_noun_4220-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/02_clusters_other_coordination_noun_4222-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/02_clusters_other_environment_noun_4223-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/02_clusters_other_fishery_noun_4224-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/02_clusters_other_justice_noun_4226-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/clusters/02_clusters_other_safety_and_security_noun_4227-01.svg'
      }],
    'IFRC - Disaster':[{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_cold_wave_noun_4228-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_cyclone_noun_4230-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_drought_noun_4231-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_earthquake_noun_4232-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_epidemic_noun_4233-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_fire_noun_4234-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_flash_flood_noun_4235-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_flood_noun_4236-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_heatwave_noun_4237-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_insect_infestation_noun_4240-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_landslide_mudslide_noun_4241-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_locust_infestation_noun_4242-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_rain_heavy_noun_4238-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_snow_avalanche_noun_4246-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_snow_noun_4247-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_storm_noun_4249-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_storm_surge_noun_4248-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_technological_disaster_noun_4243-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_tornado_noun_4250-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_tsunami_noun_4251-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_volcano_noun_4253-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/03_disasterhazardcrisis_wind_violent_noun_4252-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/04_disasterhazardcrisis_conflict_noun_4229-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/04_disasterhazardcrisis_humanitarian_access_noun_4256-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/04_disasterhazardcrisis_population_displacement_noun_4244-01.svg'
      },{
        label: '',
        img: 'images/drawmenu/markers/ifrc/disasterhazardcrisis/04_disasterhazardcrisis_population_return_noun_4245-01.svg'
      }
      ],
      'IFRC - Socioeconomical' : [
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopment_debris_management_noun_4271-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopmentlivestock_noun_4273-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopmentlivlihood_noun_4272-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopmentpopulation_growth_noun_4274-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopment_reconstruction_noun_4275-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopment_rural_exodus_noun_4276-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopment_rural_noun_4277-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopment_trade_and_market_noun_4278-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopment_urban_noun_4280-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/socioeconomicdevelopment/05_socioeconomicdevelopment_urban_rural_noun_4279-01.svg'}
      ],
      'IFRC - People' : [
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_affected_population_noun_4281-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_child_combatant_noun_4282-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_drowning_noun_4285-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_national_army_noun_4291-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_peacekeeping_force_noun_4292-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_children_noun_4283-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_dead_noun_4284-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_elderly_noun_4286-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_infant_noun_4287-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_injured_noun_4288-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_man_noun_4289-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_missing_noun_4290-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_pregnant_noun_4294-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_person_woman_noun_4296-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_rebel_noun_4295-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/people/06_people_wheelchair_accessible_noun_4293-01.svg'}
      ],
      'IFRC - Activities Strategy': [
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_advocacy_noun_4186-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_analysis_noun_4187-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_assessment_noun_4188-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_civil_military_coordination_noun_4189-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_coordinated_assessment_noun_4190-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_deployment_noun_4191-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_financing_noun_4192-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_fund_noun_4193-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_gap_analysis_noun_4194-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_humanitarianprogrammecycle_noun_4195-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_information_management_noun_4196-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_information_technology_noun_4197-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_innovation_noun_4198-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_leadership_noun_4199-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_learning_noun_4200-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_meeting_noun_4201-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_needs_assessment_noun_4202-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_partnership_noun_4203-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_policy_noun_4204-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_preparedness_noun_4205-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_public_information_noun_4206-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_reporting_noun_4207-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_respose_noun_4208-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_scale_up_down-01-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_services_and_tools_noun_4209-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_staff_management_noun_4185-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/activitiesstrategy/07_activitiesstrategy_training-01-01.svg'}
      ],
      'IFRC - Product Type':[
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_calendar_noun_4297-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_camera_noun_4303-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_chart_noun_4298-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_data_noun_4299-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_document_noun_4300-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_film_noun_4301-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_map_marker_noun_4302-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_report_noun_4304-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/producttype/08_producttype_table_noun_4305-01.svg'}
      ],
      'IFRC - Non Food Items': [
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_blanket_noun_4306-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_bottled_water_noun_4307-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_bucket_noun_4308-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_clothing_noun_4309-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_detergent_noun_4310-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_flour_noun_4311-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_food_noun_4312-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_infant_formula_noun_4313-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_kitchen_set_noun_4314-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_mattress_noun_4315-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_medical_supply_noun_4316-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_medicine_noun_4317-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_mosquito_net_noun_4318-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_nfi-01-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_oil_noun_4319-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_plastic_sheeting_noun_4320-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_relief_goods_noun_4321-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_rice_noun_4322-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_salt_noun_4323-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_soap_noun_4324-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_stove_noun_4325-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_sugar_noun_4326-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_tarpaulin_noun_4327-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_tent_noun_4328-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/foodnfi/09_foodnfi_vaccine_noun_4329-01.svg'}
      ],
      'IFRC - Wash':[
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_borehole_noun_4330-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_latrine_communal_noun_4331-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_latrine_noun_4332-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_potable_water_noun_4334-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_potable_water_source_noun_4333-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_sanitation_noun_4335-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_shower_noun_4336-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_solid_waste_noun_4337-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_spring_water_noun_4338-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_submersible_pump_noun_4339-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_toilet_noun_4340-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_water_source_noun_4341-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_water_trucking_noun_4342-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/wash/10_wash_well_noun_4343-01.svg'}
      ],
      'IFRC - Camp': [
        { label: '', img: 'images/drawmenu/markers/ifrc/camp/11_camp_camp_permanent_noun_4345-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/camp/11_camp_camp_refugee_noun_4344-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/camp/11_camp_camp_spontaneous_site_noun_4347-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/camp/11_camp_camp_temporary_noun_4348-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/camp/11_camp_camp_transition_site_noun_4349-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/camp/11_camp_refugee_registration_noun_4346-01.svg'}
      ],
      'IFRC - Security Incident' : [
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_abduction_noun_4258-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_arrest_noun_4259-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_assault_noun_4260-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_attack_noun_4229-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_carjacking_noun_4262-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_dangerous_area_noun_4263-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_forced_entry_noun_4264-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_forced_recruitment_noun_4265-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_harassment_noun_4266-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_house_fire_noun_4267-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_land_mine_noun_4268-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_murder_noun_4269-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/securityincident/12_securityincident_robbery_noun_4270-01.svg'}
      ],
      'IFRC - Physical Barrier': [
        { label: '', img: 'images/drawmenu/markers/ifrc/physicalbarrier/13_physicalbarrier_border_crossing_noun_4351-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/physicalbarrier/13_physicalbarrier_checkpoint_noun_4352-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/physicalbarrier/13_physicalbarrier_earth_mound_noun_4353-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/physicalbarrier/13_physicalbarrier_military_gate_noun_4354-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/physicalbarrier/13_physicalbarrier_observation_tower_noun_4355-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/physicalbarrier/13_physicalbarrier_physical_closure_noun_4356-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/physicalbarrier/13_physicalbarrier_road_barrier_noun_4357-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/physicalbarrier/13_physicalbarrier_road_block_noun_4358-01.svg'}
      ],
      'IFRC - Damage' : [
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_affected_damage_noun_4368-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_affected_destroyed_noun_4369-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_affected_not_noun_4373-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_airport_affected_damaged_noun_4359-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_airport_affected_destroyed_noun_4360-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_airport_affected_not_noun_4361-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_bridge_affected_damaged_noun_4362-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_bridge_affected_destroyed_noun_4363-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_bridge_affected_not_noun_4364-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_building_affected_damaged_noun_4365-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_building_affected_destroyed_noun_4366-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_building_affected_not_noun_4367-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_house_affected_damaged_noun_4370-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_house_affected_destroyed_noun_4371-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_house_affected_not_noun_4372-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_port_affected_damaged_noun_4374-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_port_affected_destroyed_noun_4375-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_port_affected_not_noun_4376-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_road_affected_damaged_noun_4377-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_road_affected_destroyed_noun_4378-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_road_affected_not_noun_4379-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_school_affected_damaged_noun_4380-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_school_affected_destroyed_noun_4381-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/damage/14_damage_school_affected_not_noun_4382-01.svg'}
      ],
     'IFRC - Infrastructure' : [
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_assembly_point_noun_4385-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_buddhist_temple_noun_4386-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_building_noun_4387-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_church_noun_4388-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_community_building_noun_4389-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_distribution_site_noun_4391-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_food_warehouse_noun_4435-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_government_office_noun_4393-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_health_facility_noun_4394-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_health_post_noun_4395-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_hindu_temple_noun_4396-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_hospital_noun_4397-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_hotel_noun_4398-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_house_noun_4399-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_infrastructure_noun_4400-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_mobile_clinic_noun_4401-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_mosque_noun_4402-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_ngo_office_noun_4403-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_police_noun_4404-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_school_noun_4405-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_university_noun_4407-01.svg'},
       { label: '', img: 'images/drawmenu/markers/ifrc/infrastructure/15_infrastructure_un_office_noun_4406-01.svg'}
     ],
      'IFRC - Logistics' : [
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_airport_military-01-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_airport_noun_4408-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_boat_noun_4409-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_bridge_noun_4410-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_bus_noun_4411-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_car_noun_4412-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_ferry_noun_4413-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_gas_noun_4414-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_helicopter_noun_4415-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_helipad_noun_4416-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_port_noun_4417-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_road_noun_4436-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_ship_noun_4419-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_train_noun_4420-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_truck_noun_4421-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/logistics/16_logistics_tunnel_noun_4422-01.svg'}
      ],
      'IFRC - Telecoms':[
        { label: '', img: 'images/drawmenu/markers/ifrc/telecoms/17_telecoms_computer_noun_4423-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/telecoms/17_telecoms_email_noun_4424-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/telecoms/17_telecoms_fax_noun_4425-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/telecoms/17_telecoms_internet_noun_4426-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/telecoms/17_telecoms_mobile_phone-01-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/telecoms/17_telecoms_radio_noun_4427-01.svg'},
        { label: '', img: 'images/drawmenu/markers/ifrc/telecoms/17_telecoms_walkie_talkie_noun_4428-01.svg'}
      ]
     }; 
  
});
