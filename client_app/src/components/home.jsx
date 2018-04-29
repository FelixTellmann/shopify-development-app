import React, {Component} from "react";
import {Layout, Scrollable, Card} from '@shopify/polaris';
import scriptLoader from "react-async-script-loader";


const restaurants = [
    {
        "geometry": {
            "location": {
                "lat": -34.0407557,
                "lng": 23.0448715
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0394067197085,
                    "lng": 23.0462204802915
                },
                "southwest": {
                    "lat": -34.0421046802915,
                    "lng": 23.04352251970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
        "id": "d4b7de15e51f5169ed57066d84177b6e3b380ba7",
        "name": "Protea Hotel by Marriott Knysna Quays",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 534,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108751470628639609884/photos\">Protea Hotel by Marriott Knysna Quays</a>"
                ],
                "photo_reference": "CmRaAAAAdwAnUstsyV4fj-WUOmxSwVyI2ZmnnJHI5y7NgAepL9Zmu1H-aQCoEI9pa_1vqoTbfP9ACksa-0JnLpHCIhPS1j1QWaCEwGH42WUdHxoY4YD1JIDkx5_uVKKL1JVSJqTcEhAA2G8KgudDKXgCS4tKTx2UGhRGF9YoGe9QxQWcpBWUNyAvsNPmyA",
                "width": 800
            }
        ],
        "place_id": "ChIJhTyDPYvqeB4ROmbLGdeb1hc",
        "rating": 4.3,
        "reference": "CmRRAAAAQSaVrctYcqdGA6_daURlhHu1ea3PXuKTuaYiBZ6Bv7Ov-PxxnqruHuGNBOYjAyhCRYKobQnEf0voQWpx5qXOuVKcGcFjk_4IOkiYHteraWwEQucfLkbBE9R1K-jHKl5iEhCwMBGyMxgjTFyXZRksaq8EGhSOj6mmcUuKAGGK_3MJtjymZzUxdQ",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Waterfront Drive, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.047822,
                "lng": 23.04734999999999
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0464845697085,
                    "lng": 23.0488207802915
                },
                "southwest": {
                    "lat": -34.0491825302915,
                    "lng": 23.04612281970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "fe3ecfa6228049763470355211fc0e09e8259612",
        "name": "île de païn",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 537,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100048663634600518501/photos\">île de païn</a>"
                ],
                "photo_reference": "CmRaAAAAIRvZlq1p7kSmrM454BGw8561IRBlru0BKRrs2E3wzVT4K3M6dl-ARMLfVMLy39Zi_U4bGHznGUkYuCMeXFvSrUDa3QlJFv7x-UbHBMa51f4gGjQlyRDx7gZrZrWi9wKQEhAIMShNbwY2Q3rkoGD5YIsLGhR2j31lQpBHjsoWoSD88Gna3hJjSw",
                "width": 935
            }
        ],
        "place_id": "ChIJ3z-7LmDqeB4Rt8P0CRKqvlc",
        "rating": 4.5,
        "reference": "CmRRAAAAGOLaUWq44S50XdhtesjQsWE6Y1kRKHoBYdtuZ6WSa9XcEPoeFO5nHK2yrTidlp2_2gcQXXpq2rtjzJ1SgqHgofpiKb-1ngttE0_GMyj2L5Bhwm4SvtYJeWF-N-TP0mQqEhDEwmFmk5KpeLaKgfI8dOIJGhTyS40vHO9D10WRO8g-Djsyu2hkjA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "10, The Boat Shed, Long Street, Thesen Island, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.04143679999999,
                "lng": 23.0455667
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0400878197085,
                    "lng": 23.0469156802915
                },
                "southwest": {
                    "lat": -34.0427857802915,
                    "lng": 23.0442177197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "322e74bf72c8fe26efeb6a999ce2bbc5c6c9d18d",
        "name": "34 Degrees South",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111000589690083401711/photos\">Wayne Schmidt</a>"
                ],
                "photo_reference": "CmRaAAAAHwx845hazHhkFsxs1pZtFU0-QsX6YitdycWiMCiBnAVRc8x4kQrwSTivBTVaLXIHQmKvdei9NWtT0NMSsGnCBSEpL_yFiPt0q__9W5xZLMAEpQdMde3iI2oHnCxAojLaEhAPOH7Grv2Qru6f_LWaW_Z4GhTKjZxfX9k8Uay3wyTT18wqn5x5cQ",
                "width": 5312
            }
        ],
        "place_id": "ChIJhTyDPYvqeB4RJhTbBImva9I",
        "rating": 4.1,
        "reference": "CmRSAAAAq6nwn7PmnrHJ8NZ9pacMZqnwCZbeE53Upw4c6_JoBEtn8hQBOUkkWpr2Mhq0D3G88wVuIRxHWSaCYWY8VpwWTaGroDProsGeHsW14fANehBZuYLPkxEyhBmTKsPUx12KEhCdjqSxDt2TfMm4iJJchnUZGhQIJayFFb5LC8sX69MrlLi-6d_NbQ",
        "scope": "GOOGLE",
        "types": [
            "liquor_store",
            "restaurant",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Shop 19, Knysna Waterfront, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.049085,
                "lng": 23.04699799999999
            },
            "viewport": {
                "northeast": {
                    "lat": -34.04773601970849,
                    "lng": 23.0483469802915
                },
                "southwest": {
                    "lat": -34.05043398029149,
                    "lng": 23.04564901970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "a75d381af6abe62a5615442981932d60ff0a2621",
        "name": "Quay Four Knysna",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2368,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104415821899180738931/photos\">Heinrich Dinkelmann</a>"
                ],
                "photo_reference": "CmRaAAAAaYzJBEfMEUd7ptOkucmFn7K12pSbl0I8kJBoLE-5GStpvrqS9OPzfJ_OdTiiUm6e994amPWMw4lu1G1p2m_vjTPYZqabPrR6dZw5Z5ti4SecnMI1DdFspVtty66PQ9BGEhAiD3jD19wipX1h70heUBIZGhRQ0AgBBF9me-MM58n6Q5SKLi8xfw",
                "width": 4208
            }
        ],
        "place_id": "ChIJz8IySfbqeB4R7qMTYQCimnY",
        "rating": 3.7,
        "reference": "CmRRAAAAZJWR5uEYcDsA8xnKNvMp1hMVI4cYMi_BvvJSYUu_mH9dhxyQC0UZPhNh5uaZuEi6frg8VyJ76ExY2wjF4s2ainq6PpaSpyt0JzAGRdcOXHSaEmm8_GXu9I15VM0yOeevEhD4yaIzlh7ptVsIaqgN7QFAGhT8Iq0wVa5zKotpNZAonHGcTsmT5A",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Harbour Town, Long Street, Thesen Islands,, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0373002,
                "lng": 22.9947299
            },
            "viewport": {
                "northeast": {
                    "lat": -34.03584876970849,
                    "lng": 22.9960856802915
                },
                "southwest": {
                    "lat": -34.03854673029149,
                    "lng": 22.9933877197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "a26452aa35eac4eafe31e7b64f9d1fe883c6310c",
        "name": "Pembreys",
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106957050960225457273/photos\">Ines Köhler</a>"
                ],
                "photo_reference": "CmRaAAAAwIltU4i4fnnC4pc5b6TNr0nYJq5-RE38IxxJxoTVgFZlEEoDyE8X8RMhn4GSyA_oc82VYFQqXTEnEZm66P4GDvdAC8uvNPyTxMFGKZqinQDh4eeaQXX5hZByHx_HxziwEhAeZgEyQOvB6odfiHfq-q4OGhRNv9Hm1Rbjf8QEkwogR5ADv90ghg",
                "width": 5312
            }
        ],
        "place_id": "ChIJK_KCl0DqeB4RRkZLziH_Q30",
        "rating": 4.5,
        "reference": "CmRRAAAAKfkTb9t-ScyGnBJHB5PxeBS_16cBePuMTqGL5KVWPXCIanapluHG-JIsjVwVX66Ru_aJkhhWh9etjtjo810NGRqZa15NY7WLZNtcfRBMViVh8oJBSWJvy_NOinxExG4_EhD3R5svPe3sC86yK4ItFlf6GhSZKF-qOORHCleN4sUl0cj0zgFIKw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Brenton Road, Belvidere Estate, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0475903,
                "lng": 22.9980255
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0463081197085,
                    "lng": 22.9993748302915
                },
                "southwest": {
                    "lat": -34.0490060802915,
                    "lng": 22.9966768697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
        "id": "2ab66b2a6c1842198e213b7c2b171f31c4562051",
        "name": "Belvidere Manor",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 768,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108727124635175595411/photos\">Belvidere Manor</a>"
                ],
                "photo_reference": "CmRaAAAArF3HybuNJovw_Fwdlle8pvcSag7EvUsClYx43O-G2P66sg0iRqAaduQRMR6n6DCQWOj0WlqbZi1ZyhlEQG7XFA4ejHCXT2gtWKwNeaj62ZlOxqnCKLPZk_W0XgrO7aSEEhCsp09XJgc1jOeqiEm7Ys3MGhR41Sy0pRAFEvCpnL2YY3ctpnk7UA",
                "width": 1024
            }
        ],
        "place_id": "ChIJA3aF21OVeB4RM2ARbzjwnl8",
        "rating": 4.3,
        "reference": "CmRRAAAAMSIvAwV9QQ5AklIzfm0v0w2h1FSLMxWkVojBJ828kyY_xCidv_5iIXgxUTCEJWjj0hN8RoPCjdaVv4_KeCLYkjEF1aBL_9dp8V4DcwcZw_9AgruFoUWXNDav6xuCMBcgEhAGc-05V3TTB7yTjxz9x7UrGhQzwpbDk_WoSyxHdRMYndJ1WKrlng",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "169 Upper Duthie Drive, Belvidere Estate, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.066836,
                "lng": 23.062083
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0656497197085,
                    "lng": 23.0634503302915
                },
                "southwest": {
                    "lat": -34.0683476802915,
                    "lng": 23.0607523697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "id": "7c8a2736a8f89427e2b3fdcd401fc7c5a7f5f9cf",
        "name": "Nadines Corner on Leisure Island",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111472325622065382126/photos\">Nadines Corner on Leisure Island</a>"
                ],
                "photo_reference": "CmRaAAAAD40cw_UCsLMJ_RhQvX357Dv4-KwyEx2K3hcW8WB_GPq4FkA687w1EzptjEatjcun3UoxqPpL4aMkR7RWeYYb9lAJm3TeHprIUVGMX8_eAHeRim7M-i1sbszpLHaXCDgwEhBIN84CREFW5vyESzDWDF59GhRa-whnBlp72DFW1uQwuG8vUYY67g",
                "width": 2048
            }
        ],
        "place_id": "ChIJt2Osx7HreB4RFvonHFAP21E",
        "rating": 3.8,
        "reference": "CmRRAAAALrgGJxjB4gsO2SQZyIHPpwbnxWr4BnRldagiYXWg5PYIG69ogJ9xhCBpqlj63jcKghoUlD0FVJNDscZo4TC8IkBB4N35rgWlSOw1zkAUPIIoUmHvSh2Qs-lCWzQYKXcFEhDdPa54dxMDGplaS_5XbpqSGhTsIY9Bp0KkPKHqcb8wMg255nUuhQ",
        "scope": "GOOGLE",
        "types": [
            "cafe",
            "restaurant",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "12 Kings Way, Leisure Island, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.03519859999999,
                "lng": 23.0475832
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0338925697085,
                    "lng": 23.0489203802915
                },
                "southwest": {
                    "lat": -34.03659053029149,
                    "lng": 23.0462224197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "28f39a30835a351c449729795fe77639c108e9bf",
        "name": "Raasoie Ethnic Indian Cuisine - Knysna",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106809446001993435585/photos\">Ravikanth Jupally</a>"
                ],
                "photo_reference": "CmRaAAAAyq3DktRFLkuXZ9PO--DfrQHGN5Irp4Wfn6PpfW5PMcARYYn3h-JEpMrdoBjl3x5ImygPLAX431WL0D7eZK5N8J-E3VqMXQdOGxD8nbIarlPf3Mdgxc2O6XvytXF7zN94EhCD3VkEf2rZoS1vZCKJyATuGhSosP35jNj-gQ_Gq4aXrLVKyvt8EA",
                "width": 3264
            }
        ],
        "place_id": "ChIJJwGE64nqeB4RRvNJu17rAxE",
        "rating": 3.5,
        "reference": "CmRRAAAAyvrY5bpkol33Po6LTMi6zEPwt_dZUNtGfvK_sYISBCVzCNC6jvSp-kSHjRMJ3GPg8w1Y2U8ailNjyCN7eTLIFXn4u86pScl_AvdSrNI0FkV3RVOcJYENck4FPepuIoMfEhDfgzzKwbK9acoaanBescYyGhQorwiUc1Y0crG8H_T6RzlM7Nxk7Q",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "24 Main Road, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0488,
                "lng": 23.048081
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0474510197085,
                    "lng": 23.0494299802915
                },
                "southwest": {
                    "lat": -34.0501489802915,
                    "lng": 23.0467320197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "073ecabe5b8915692eab38df173df90f2a260460",
        "name": "Tapas & Oysters",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 533,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103543323127436578227/photos\">Tapas &amp; Oysters</a>"
                ],
                "photo_reference": "CmRaAAAAntc2-py7hOa6B7hutIqQSkw5azcUAZBsEOIngl72Ie7UtAiJaaAaF8wFVkeu95a-PLK1xLDcT5ODqWXOae_BHo1HuaWUwOlB_3wdaTKusNSB1hfrbIxuCo4c2FLFht3YEhDgRMhBFETIOsz7i2mRLdaJGhRMmCqS5Bf1wHoCd0L3FEmhsfOLrg",
                "width": 800
            }
        ],
        "place_id": "ChIJJRtiK1rqeB4Rm5E5Be3L-nM",
        "rating": 4,
        "reference": "CmRRAAAAvK7PzzG40IcmGYtIriwguDUrBnHo8gei8GJ6HC1OV3SM-BFTjDz8Tgck-h9yxcsj7Pkz7LsJVxPxMt9dVnW0VcVbyb-UcskpvXgz-TRXyVuwPW5RLCkCtsmYzF-qi6n-EhDAjuRSYYDVTgxlP39fPA_bGhT-_4eFeGxg5_-vI7JjWkfSs2kaaQ",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "31 Safron Lane, Thesen Island, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -33.977459,
                "lng": 22.964811
            },
            "viewport": {
                "northeast": {
                    "lat": -33.97611001970849,
                    "lng": 22.9661599802915
                },
                "southwest": {
                    "lat": -33.97880798029149,
                    "lng": 22.96346201970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "532c22df0d7ffb1b2cfe6a9a724ba20af4169967",
        "name": "The Red Barn Country Restaurant",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 957,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101159726440795975723/photos\">The Red Barn Country Restaurant</a>"
                ],
                "photo_reference": "CmRaAAAA-fpyeu8GjQBgr0JAD0H1dAvoxCteoR1jMEVt-PI29LOJISYENkaXUhHz6w1Zg9HFp-B12zJltPHQqwM0_fsJTMIjrmWH31MYWBgCVCsgivEQMww9Fj1Rw9JvJNdVM0VGEhAMkCBeQIazBYcOzUwisEYTGhR0uQtcpmD9pwnczaFMOomDz4YJEg",
                "width": 960
            }
        ],
        "place_id": "ChIJ____Pze5eB4R-3qmkyhly-I",
        "rating": 3.2,
        "reference": "CmRSAAAA67QQj49nuErOzqwaETVsBDkwBkK4nSYjehb-0iyehvJwkJe68Cldaq8lmLRQhuHXVf6vIn-k11glgkOSGEgoOKe6shSH6n6qCnJxfRvNpxq2Ey70prTFVwZzKnvaMxx5EhC3QlfiXhD_OSSpwk8hMZwBGhTNCtW63tKX8U2n5_ERU5OdGTeKVg",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "The Red Barn, Rheenendal Road, Highway West, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0490681,
                "lng": 23.0478789
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0477191197085,
                    "lng": 23.0492278802915
                },
                "southwest": {
                    "lat": -34.0504170802915,
                    "lng": 23.0465299197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "6f13e94f7edb2ce03c139e61bd370004a4a35bff",
        "name": "Sirocco Restaurant",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106002496201615684923/photos\">Pieter van der Westhuizen</a>"
                ],
                "photo_reference": "CmRaAAAA0HBW-jmQX9OOXkPOfP8oIh80UkJhcdk-oPcUt5ho8UcgfzVRq4h4htweRV4Qu4zc5KqJGlVUvq95LpwmURYXbT1K4GIBt9vj6TSjHJA3qn5-s4YtfGpAJknqGS7fYvQSEhA9Es9yqZuU2v1lAetTsLGsGhT2PoikttdVvw_pD8eV6boDsXJCJQ",
                "width": 4032
            }
        ],
        "place_id": "ChIJ5fYUM_bqeB4Rc_14z_1Sz9k",
        "rating": 4,
        "reference": "CmRSAAAAzOeHWy2qXdhb9z17BPMP4_hUGkvspmw-Jy7eMLyu3ZpJkM6tUD3lQzKTaBJB62whbmCXubbOd12KypvbETw60z3b75r8VPRC6TeGvBVI-bzp9g87PSBl70KWD1y9YqxAEhACD63weyGxxRtUlihKNStKGhRS7qeawLFV3XFNJubOdW5DQJUGpA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "28, Thesen Island House, Thesen Harbour Town, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.03911999999999,
                "lng": 23.0407113
            },
            "viewport": {
                "northeast": {
                    "lat": -34.03777101970849,
                    "lng": 23.0420602802915
                },
                "southwest": {
                    "lat": -34.04046898029149,
                    "lng": 23.03936231970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "62cad27b7f7b9847489c0746df6e19523edc592d",
        "name": "Cruise Café",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117890019666170758367/photos\">Cruise Café</a>"
                ],
                "photo_reference": "CmRaAAAABefLanIIiHEQAZlGI7RjJPkdHyZi9M8kPTHCls2T5Daq7FFlJJxjBn7hQpSLAK2Iif0mzWiq_hJqTTj16XlzTLzqQ-A6JqaJqEM5CxSG_yIGkLbo76Vd4mgiqUyxVi69EhB9XBJNyP2H92b06_8POPWzGhS6lDlBK3WJY5oLuk81283ynuP4Ow",
                "width": 2048
            }
        ],
        "place_id": "ChIJcZJKSIzqeB4RNRjzmosOy-c",
        "rating": 4.3,
        "reference": "CmRSAAAAfH-s2F3w5kjwn4AerdRNdspJOTrj8hpmEniBArIna7-JqFFRmzzJP2BRXD9WEuL9NBCs9temj7DJ36NrC92UivdefaOcL4i97H4HPmYHCynBSW1v4u6rEWpD6y3cAzlzEhBiKI53sHaOTY8POBswEcDHGhTInJb3SbhoYpc_DAR0Lygc6fNfrw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Remembrance Drive, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0765658,
                "lng": 23.0606041
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0752230197085,
                    "lng": 23.0619783302915
                },
                "southwest": {
                    "lat": -34.0779209802915,
                    "lng": 23.0592803697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "bd4a8e6181dbd39c1c9e53485e63e691da381769",
        "name": "East Head Café",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109415254328444469335/photos\">Rephaai Asmal</a>"
                ],
                "photo_reference": "CmRZAAAA9xYGoY1EIoBEX9U0-3MdojVF2uQAoS61_We9P5AodWq_QOaA-COFEEHSg7ayuPMNpiOvB4qCBK1EehavT1VhJPnNnz6phRD92VnhJBwqZEziSw0Fi-ML5BHtcfM7hVp7EhAQ9amTIbH-tC6bETM54kglGhQs8iNDdOs7QrUSE3pIj8cvxIB4Vw",
                "width": 4032
            }
        ],
        "place_id": "ChIJTfwtq7zreB4R9Hs5sXr8Zdg",
        "rating": 4.5,
        "reference": "CmRSAAAA__eis0S8BwCDwfdli_8r9QFZXyHxiHZrCJVEa8rUxDJ1jeW7S8BeRuD-A9DL-_IRK6qdmytIu6YIGu6cIg8wU_YdOyREo4L0MhJpPpcnZVaz9x8Ytn3h4xsIh0hkqEELEhDHm6fiDHnV9aLpshgSlc_5GhSpczrmowhznN0lyt2NkZjThD73XQ",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "25 George Rex Drive, The Heads, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0526749,
                "lng": 23.2733506
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0513259197085,
                    "lng": 23.2746995802915
                },
                "southwest": {
                    "lat": -34.0540238802915,
                    "lng": 23.2720016197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "3b2b362f7f8655e7b97ec86178d1d9b40b6c9e17",
        "name": "Zinzi Restaurant",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 891,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114717331334466818165/photos\">Zinzi Restaurant</a>"
                ],
                "photo_reference": "CmRaAAAAXczlZvWPTiW1RcgpksdRpLEvFBB8LB3nDnC3-7oSXMRiE_tuqc7Pv-jOPQusN83MkHbMd7fy8HmV8H9D3raR7UfCiHilxwEvRWO-jfGH5gwFoGftVqjqzOrhR52jkU1xEhCyEjGI4galRmvvS1Ze5bMsGhS31uc2VfOmO4DIYr1QYFZtDBp5yA",
                "width": 1190
            }
        ],
        "place_id": "ChIJe8mw_A3ieB4R7qWmkjM6ABo",
        "rating": 4.6,
        "reference": "CmRRAAAAL_Oa1yHL9TNx0hjK8iejKlvlPi3BKXMIvadmHil-0Lckjm_PgASBp-ukXm5lg7K1ah4Ouf7Kn59X6hnnKtR0O_bBzW7O8e3oA85O7Qh_Ps37kgmhODx2vOdTRsQg0ThPEhBE55sxa30HjIfGECstEpP_GhQRQi7eAxIca9Jmh8GRZFPT8WxH9w",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Hunter's Estate, N2, Plettenberg Bay"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.040764,
                "lng": 23.045078
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0394150197085,
                    "lng": 23.04642698029151
                },
                "southwest": {
                    "lat": -34.0421129802915,
                    "lng": 23.0437290197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "b0466392d4196c281f7a338577cad888cae9aec5",
        "name": "Falcon Creek Spur",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108676786428995786700/photos\">Falcon Creek Spur</a>"
                ],
                "photo_reference": "CmRaAAAAfHpBt_6K_wpXVjE263OtZ1ztR5J7X6iWpxjJW_mW-wio6X2J3NRT-EiQ0riJJah4NC0ytb95NWKkNH_xrIRVl5eZIpguekGniUnPEamLARME-CFQRDkyXXwgz2_MumN0EhDEFdsFdyCfvDylkr3CftRcGhRhNZdL4lB-f9vtKCUJZi1INN9o2Q",
                "width": 1080
            }
        ],
        "place_id": "ChIJTwPVwYrqeB4RGgiJ9Xz7rqo",
        "rating": 3.7,
        "reference": "CmRSAAAA1JU-ua5pk0Z01Ci_Pgr5BGifk4atFgt4xi-sNCd94-3NeqoeVRlnDxJkYpe8bQB78gSAMpYld-1XaYu2CODkJVWcWiAoyeub4E9fcwD6JqF0xQ8FWDAQ3pC5CYnD6b0CEhCMF8BkKoD45Gjh3Z8rx3HPGhRpMjJ9NKczeykYZr3GmYlRfKo4vw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Waterfront Drive, Shop 29A Knysna Quays, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.04232220000001,
                "lng": 23.0461774
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0409732197085,
                    "lng": 23.0475263802915
                },
                "southwest": {
                    "lat": -34.0436711802915,
                    "lng": 23.0448284197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "d00eff900e673b80af817162c075fd3f3692bbe5",
        "name": "MV John Benn Cruise",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 4000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113235793210222606388/photos\">Andreas Vester</a>"
                ],
                "photo_reference": "CmRaAAAAL7aL7i2JNpgxhgIuOHcpkF6ylsAd56oGu0YokKHOvc5cofsBbOXqVHimhBuv4-i7GSsMt0KDs0VRk3kZkZootzQ65UWesGIs1yKmGONclKusoap0rvruULZLquXEH5utEhAJ4UKRfRbUHvGvRbUCMHAfGhQXPgD2zoQ4Is4o2_ORvKBt95ItSQ",
                "width": 6000
            }
        ],
        "place_id": "ChIJgeJON4vqeB4RnyeL1KJzVu0",
        "rating": 4.4,
        "reference": "CmRSAAAAdeZrSfD1Gedv8e8PWdpRryeHuSG9oN3I33TDTzWRYzfAJ7ehzB_rhGnt-Mi4PvRafPR5k8p46fUVoqdGnESTYkeBARuBo53EcA97997ACJRgtzqdpNHnw_3Fns25YklmEhCuvj6MwXnYx3CwNHCK1NgkGhSmbcOF3BYrLMyMIQzOT7cAQKk2NA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Knysna Quays Waterfront Dr, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0416318,
                "lng": 23.044874
            },
            "viewport": {
                "northeast": {
                    "lat": -34.04028281970849,
                    "lng": 23.0462229802915
                },
                "southwest": {
                    "lat": -34.04298078029149,
                    "lng": 23.04352501970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "eee5588fdfb01c25b1cf8ac8f881a5dcb1564b6a",
        "name": "The Drydock Food Co",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112612031149188112468/photos\">William Brown</a>"
                ],
                "photo_reference": "CmRaAAAAwx4Lj686DIfAfqdG8QbVdTd6WnA1V17DUWzCnAyqg1mg985gBkXUvDljYzS3B-N6YHIbwnc-SaMzxaGFOEpAuayHdUARM2YRjBRbOMmH3X-FH-mCpJbxTQViYHhytn38EhAKUKi4XN7EXVcHrrukHCFYGhSRPDUaSG5JG0OK1YWjL4jOzQxOqA",
                "width": 5312
            }
        ],
        "place_id": "ChIJ6fxgeprqeB4R_h5vRe_3qK0",
        "rating": 3.9,
        "reference": "CmRSAAAAsxG5cGfKdSCFrAf0NdBelBp_HPGiIKW9vH36elBUF0wuqX0Z9AsMchtUXqPSxwwLPUjDLzNfEjH_Ry7uW6huoo48J7x3RzVsRAwf6atRBPzfxPGnJlOtidPSVvGu501dEhBalnTEEUGn4lvUkwoQQxA7GhSfHe-tEPYdsOWnCRTjkKCYiXZ0_A",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Waterfront Shop 1, Waterfront Drive, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.035793,
                "lng": 23.052224
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0344440197085,
                    "lng": 23.0535729802915
                },
                "southwest": {
                    "lat": -34.0371419802915,
                    "lng": 23.0508750197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "acc75dd0e044453b4020478e399ca0e92f5d53d1",
        "name": "KFC",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105596359325349145504/photos\">Warren Ackerman</a>"
                ],
                "photo_reference": "CmRaAAAA9o84Jj0X_gLLKQ7QrZj9NU-CCUIKYFShpuY7b1mFjG4DwQZcLR_PR4S0Tnc4U7125L9uKQzb6ULk9nYYyTgxWviGSUThDlMVXpL_8vF0nLSoXJxEbWAUnZNIAjpTuuY1EhDacQoS9zL39tM7WJcql7NGGhRu5ffB2QocLQ7zJaOd2ZmECl1wcQ",
                "width": 1920
            }
        ],
        "place_id": "ChIJkzr0e2HqeB4RsNzBGgaJAbI",
        "price_level": 1,
        "rating": 3.5,
        "reference": "CmRSAAAAYYP0SelF6THQN33tkGyymMX-I_DnRnPOnEmQu5DLP-oCDFdzIBBnUw17R84Vl7dTLYIRdE5hZa9gRjjg02epVUX9iR734CKjFmP4eerEfxPXS_T3yh8myHdA4PWN_hFdEhBcrRlU-pEyDdtR2wcl2naXGhR4cxNr2PG5FNdE9yBWMbkeAsTH3Q",
        "scope": "GOOGLE",
        "types": [
            "meal_delivery",
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Main Road, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.029746,
                "lng": 22.938575
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0283970197085,
                    "lng": 22.9399239802915
                },
                "southwest": {
                    "lat": -34.03109498029149,
                    "lng": 22.9372260197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
        "id": "1c1c9ee3a7763123d5cc4937d171f0e5182b89d6",
        "name": "Blackwaters River Lodge",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1377,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105683255138875622693/photos\">Blackwaters River Lodge</a>"
                ],
                "photo_reference": "CmRaAAAAQawxHsMa7VL3o1jL79ejh1nFADP2WYx7XuteXlcPhcVQL3YbNMZjrLSNb3JgTE2LGWeaCYYiDL8BFRwCnY3qLjPZ8GDfRcy10yZ2cmzfCaAux-asjL9pmxyfl2kdgMBUEhCBNSxeyJFtotigVlcBvFYkGhTVaPdEn6gPh8AJV_cNo39CSXl8Iw",
                "width": 2448
            }
        ],
        "place_id": "ChIJaQlm_CW-eB4RFQsPwzHD_o0",
        "rating": 4.4,
        "reference": "CmRSAAAAAQM4_DBqPtshQfqIRF5s2HtAJnksFAusFNxwMB-rcBs8G8ms6ArveuJCuHShLPTW9CQOcUcYiVj8Tn0YJv6MyulpG-YOAOW-6309VTu5JwAUGkw79VG6_lDZlb7I4HHsEhDO9_JcyjyDvyFEht0YrZ-YGhSc6PCm826nCUST-GeHOLMEFUMBJw",
        "scope": "GOOGLE",
        "types": [
            "travel_agency",
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "N2 Highway, Goukamma"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0404179,
                "lng": 23.0473984
            },
            "viewport": {
                "northeast": {
                    "lat": -34.03906891970851,
                    "lng": 23.0487473802915
                },
                "southwest": {
                    "lat": -34.0417668802915,
                    "lng": 23.0460494197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "4e10ce9fdd0170d1045714d4b568e473067e4d4d",
        "name": "Limoncello Ristorante Italiano",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 426,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103442060353088081246/photos\">Limoncello Ristorante Italiano</a>"
                ],
                "photo_reference": "CmRaAAAAhsUJ91K0VzyxseKUEQnme-azn-cptfg7TNYNW99QNfNYGu6vTxhfQJ26ItLHxlKVq073xDnqFkYaujGNtmq5A42UurCrFOIKKMzo1ZvXavMSm_E948UXY3oV24Vtmnb8EhBuDHadsLxyZb3nqVN9_VlkGhRwBbc92HYt3CLN9YvC6elXjvJ5uQ",
                "width": 640
            }
        ],
        "place_id": "ChIJf_JKzorqeB4RMLNyzZsN-KQ",
        "rating": 4.5,
        "reference": "CmRSAAAADFPMG88PJD0P2Dg-qJywTNyKlFSQlNHn6vKNbJj91X8Jvaq6-vHQixY7DypbE_XIFxAArp3VuRrc3ZfUKJKKd0bNZrZFpKsEiLG1CCbmR-RFz7KSwa6U1T0l1pG1omyeEhA92qep_x4n-r5q-NRB_5PUGhRvh5AF6TzCAHTuj_8RYBR104uNZQ",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Waterfront Drive, Knysna Waterfront Quays, Waterfront Drive, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.03450099999999,
                "lng": 23.044098
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0331520197085,
                    "lng": 23.0454469802915
                },
                "southwest": {
                    "lat": -34.03584998029149,
                    "lng": 23.04274901970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "8ee85180a9ca290f039d7339e603373d63a3980f",
        "name": "Debonairs Pizza Knysna",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1280,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107246553601395880301/photos\">AHMED AL LUHAYBI</a>"
                ],
                "photo_reference": "CmRaAAAADyHXq_nHXep5pwGiaFkTXMQIAhrBRybAsTNl6dQemcn3PNRWzQHxJVb19NMrjrxYWgcdAOuokj7qupcJaPjl5AzFZQEG-070yMQwaBEWEvN9Gz7sAt_BSQbbC63ydxm4EhCqtkHf_CVhqJopRBv-2h6VGhSbxub6kqyauIlB67RhlPZutc9elw",
                "width": 720
            }
        ],
        "place_id": "ChIJT6Dm3ojqeB4RfnDewLUATeM",
        "rating": 3.3,
        "reference": "CmRSAAAAEs9VL3eJAJFEMtns1aYj8nL_AU2kmjbFDa60adyRbexYg5Zf0Fy1hNIF9yT0smvXFkMKjO2-wW1yBqt0_zWXd4z6qowiTKAV7RfzAglWSjp0SCS8fAA_hrNfGK0pZLD3EhCHABh0MMglxibz6vXsAjbIGhS9GSEN2O3pewXPBfKKX8b60JjLlg",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Shop 7 Pledge Square, 50 Main Street, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0359729,
                "lng": 23.05272799999999
            },
            "viewport": {
                "northeast": {
                    "lat": -34.03462391970849,
                    "lng": 23.0540769802915
                },
                "southwest": {
                    "lat": -34.03732188029149,
                    "lng": 23.05137901970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "e0af5ea89a94496467f3d95663e9512942c678af",
        "name": "Trio western flame grill",
        "photos": [
            {
                "height": 918,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106384418732981663894/photos\">Kifayat Hussain</a>"
                ],
                "photo_reference": "CmRaAAAArevY9y5FbCRQaNh5nMI9shTsyaXReLSaCJnDLqm-d29daPoMSihiCHZvtfdxVV3PYItuuaXTOTq4azy4Hc6t4OBRagIK4UZniRnmktU80aJIMhhuhlGQKbEZYab4RQSTEhBidEsMAwAljlEpo7tipzxZGhTIZ1fuXHWwhQfYYPCoNgNUEPyuxA",
                "width": 1632
            }
        ],
        "place_id": "ChIJNevQbmHqeB4RreijtKxk0sU",
        "reference": "CmRSAAAAlHNwSBL9zobHSFP05Vvjv9_6NPS3CP_wFJE84QEZpsg0so59LEC6kGpQLJPJQve7GGK-KYASCh_Tk6Eg4UqD24c3lJ08u3mZjvboG0N2HCOvEV4VjdbkZFDrPy9oouzQEhC_4NVeng36SvTA0vKYOuTvGhQEbwAtUu_qUeiLMzXvgtVei2zSIw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "shop number 4 60, 2 Main Road, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.03840109999999,
                "lng": 23.0456887
            },
            "viewport": {
                "northeast": {
                    "lat": -34.03704346970849,
                    "lng": 23.0469945302915
                },
                "southwest": {
                    "lat": -34.03974143029149,
                    "lng": 23.04429656970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "16ebaddc64b8bf22a6577b52ef88f764b1b2f2ae",
        "name": "Anchorage Restaurant",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107275386169972406465/photos\">Andrew van Niekerk</a>"
                ],
                "photo_reference": "CmRaAAAA3fQy6XkbaACAmnOpti26tSXLbuSgsEFn8vh57iL7duNWmJVtABoo5sM0VxSR-m9RO-rVMwDp5i7ExAfrytkueqSsTOOmi8_f3P_AEDBQ66pwSY3u5cbVQ-Gt-YFieOCgEhCVbjA8akJy2JNLzVlLf0CUGhQZwv2x8EGshUMEjNwHM672swLlVw",
                "width": 4032
            }
        ],
        "place_id": "ChIJ_fLasovqeB4R0Hzmebk5tfo",
        "rating": 4.7,
        "reference": "CmRSAAAAhXYeEpMVtSRh2725etIjMlwuhtwSywiRTLUjqJDh2qcQWMUPzf4fonJjmAbiYejPBtWdQ2DOw0R-CSqmCtXq_sweZsnUM58ZIo2S_3gi7tSU54M7I3WWDF7tGahfXOz7EhDSwrqV9K9kG91vuOjqQVKhGhSNtTTF-gKFD5Tx-TqBkx4ZqWdelg",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "11 Gray Street, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.03886739999999,
                "lng": 23.0455682
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0375105197085,
                    "lng": 23.0468691802915
                },
                "southwest": {
                    "lat": -34.0402084802915,
                    "lng": 23.0441712197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "29ba6c10dd28b3a8f67ed99ced5feb800108e833",
        "name": "Chatters Bistro",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102062389792866142856/photos\">Hendre van Rensburg</a>"
                ],
                "photo_reference": "CmRaAAAA8dUo08qJ3XP90Ni2HfM83APAujipAkWx12p0ILHe2xau8sTGUdVX35nPq5pgQg6GJCUD95Fk07tG4Zn2u6nhgkVC92wjcdp6mIP0GNW91KraOn3Cg6HyR7VvXIZHE7v0EhDw-eiXzQ-9ZoVFXVZYyuV4GhSv9a1GI59Fi-49btcALDK0tZ9pRg",
                "width": 4032
            }
        ],
        "place_id": "ChIJQ-OArIvqeB4R4uZOQA_HjCI",
        "rating": 4.4,
        "reference": "CmRRAAAAJMTyltyEmUdhVxbarHK4G-YacTwC48Yc0geluHZqPk64Dv1ggXgTKqxml4XCSDYYRhS-1wfGupEz-TmiemKoRvgnxQuSfI-xa57MKRgrxlDZCmqaMDqrfugdja3nBHKVEhAtEuIBWBDtkzXPri1e2J7GGhRSKDVvJjssEvFMKzXPrs_BCwJ-YA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "9A Gray Street, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0346226,
                "lng": 23.0440599
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0333367197085,
                    "lng": 23.0454196802915
                },
                "southwest": {
                    "lat": -34.0360346802915,
                    "lng": 23.0427217197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "65adfff7ec1f22f26ac281e59ea8d8910f34cd4a",
        "name": "Steers Knysna",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110281112253124830616/photos\">Stephen Robertson</a>"
                ],
                "photo_reference": "CmRaAAAAaGIh1PD5zt0Q9MWzA2Y1akVsHbcByydWxTWdp_Gq-dBoVFoE_rNYQ7u_E2TzPys3r26KXKmrUfqTFksFmd0A48P_9GsshUY1OskUWBgt0B4sqwIH9RbbG6gjHK8AE1s9EhCDAJ8ttpuw3UgONDydq-2NGhQrSF4Gb3Ea1ZD-6FowRKX8OWP78A",
                "width": 3264
            }
        ],
        "place_id": "ChIJT6Dm3ojqeB4Rhqw9r_-Hof8",
        "rating": 3.3,
        "reference": "CmRSAAAARvQ93Bu3CfjqMi3XA9PPzzZoIrf08hB8IAR-Zla40yLOTlXeV2Dvqm4KxJqzZrH2vqgzwya5YPJq80QYPqQLb-e7RC67ZgpBiYmoDkg4o4bAgWccH8bC49QfYxsXLS8FEhCmGlEoxTREaW_Da6C-uigJGhR7mJRKCbPJTLoEdYZWDdv2GRoSWA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "meal_takeaway",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "50 Main Road, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.037338,
                "lng": 23.045975
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0359806697085,
                    "lng": 23.0472733802915
                },
                "southwest": {
                    "lat": -34.0386786302915,
                    "lng": 23.0445754197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "8001579cff986d980288a62496319c28ff017467",
        "name": "\"LE MAQUIS\" by Cathy & Remy",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102820671847306427974/photos\">Andreas Klein</a>"
                ],
                "photo_reference": "CmRaAAAATqAH2EPmDb5jRlGHwInfFdWixeVUMq36fMuaEfvx7hhSB3ZwiD0FqEfbx72Vraf87-uJgl0wjk-4uPr3bGBBWfkaZ2nJQvDp7AkfRPeC9Lh2HEc4WaALRPwIBOYYtEeYEhAvg12oz1jWys_j3SFGBhJEGhQXKttJ63qQaQovneFqCD7F6VfwLg",
                "width": 4032
            }
        ],
        "place_id": "ChIJ57mlCUfqeB4Rop4-7irzeJY",
        "rating": 5,
        "reference": "CmRSAAAACyEaCpjJSHbNBgWtZuaCciRtvYeUWGJf1LY4wQKsPST9uQE5rHtNcuQL0RDqA9fXXgAMJ_qXYLrt58P39O-sYkGkoSfXSb_SMwl4Q2cSs9CjC0WE3Lb3kuKLSd5IaK9eEhCTqS-t1j2kQMnFrOos46m_GhToPNGaSmZubtENzQzz-dxGth-G3g",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "14B Gray Street, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0868,
                "lng": 22.97376999999999
            },
            "viewport": {
                "northeast": {
                    "lat": -34.08545101970851,
                    "lng": 22.9751189802915
                },
                "southwest": {
                    "lat": -34.0881489802915,
                    "lng": 22.97242101970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "bb334dcd6afd6780f8811b9fef264715180675fa",
        "name": "Restaurant (Buffalo Bay)",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107408021462123564623/photos\">Gerhard Koekemoer</a>"
                ],
                "photo_reference": "CmRaAAAAjCtd7d5b0iCiIKdJHFCC4ryGeetmImFvFGAjOkj88xjWXFbDcZoeePoCGsDPevMSMX9jvIs1tsQaF5mSfOYtaclWVyko7koP22EwHs7UwRi7JsHH72xpaYwaxYWLTzYUEhCIXlKrfGFEbCSNS7tmQBXlGhR40JHCXj3Buo7tOkb4kEcqm4RV8w",
                "width": 5312
            }
        ],
        "place_id": "ChIJ-8juMOaUeB4RoVLz8WH15k4",
        "rating": 3.4,
        "reference": "CmRRAAAA-8i4WAqdtvczoZ0LBqAUEsVOKVccvG0-WiD5BKoaOsPB92sWoaZV1YbcKOuPKAucbNdyK3Hr5WJFo2RooDilKOb9uYo9I8DIoGhJtCZJm2GmtKcknQ1Bxhhx-7dE3VCUEhC7p12pNDTgt0kfkFMhA3E2GhR2d53BG7gu_1ET26QlmV8FJfq3IQ",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Knysna, 6570, Garden Route, South Africa"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0349905,
                "lng": 23.0480609
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0336439197085,
                    "lng": 23.0494354302915
                },
                "southwest": {
                    "lat": -34.0363418802915,
                    "lng": 23.0467374697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "c72852bfddfc06266da1413f7983374e20db7b20",
        "name": "Persello Pizzeria",
        "photos": [
            {
                "height": 3096,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114338858929275526115/photos\">Sibongile Nelo</a>"
                ],
                "photo_reference": "CmRaAAAA9X15Nu-efOgNOMFb6S4X3ipQ2t_iuFBBbFH9NpKjgFvWSWah7CxyeUX5P3_C8D-pdVs1vovDAhknnkjRsjqRq3vunhVhycEU7eeNheCnTOYxBoKAI_raSkGfLeFINHQKEhDH2RzV7_qtWs4xMKbLrT1jGhT1e7a17tq7Y2yQtDULp7DobxMawA",
                "width": 4128
            }
        ],
        "place_id": "ChIJRZi4DonqeB4RRGbinXkgKbA",
        "rating": 4.3,
        "reference": "CmRSAAAASrJqLNDBUJQB68C9PF36HzmdAsKL-vLGbbD-ivNWHYrl2uin-e1aE3vCcXWzpyABXMa-35-ig3jqBsq-4odLqr-nHfxSEATZbCPfpy6UfRT4DvmlP6dkuh2usWagwCErEhATOPLpk3zcgJuseww__-i6GhQcKchIzHC_1VYMFCX4NACphAmGqQ",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Memorial Square, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.040749,
                "lng": 23.044929
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0394000197085,
                    "lng": 23.0462779802915
                },
                "southwest": {
                    "lat": -34.04209798029149,
                    "lng": 23.0435800197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "071b92b6b20878d36a6f1deabae7b8ce33767677",
        "name": "Fisherman's Cabin | Seafood, Sushi, Grill and bar",
        "place_id": "ChIJBz6DPYvqeB4RyrqF3wde_fc",
        "reference": "CmRSAAAA925_MbQvqKVKuCFCpaUTRi8zFcOHfoSD4Y4iH7jkDMCMVM1rAdH-f2cG867WYlGyro9nhyj63pgtEySkZFxNQeSUNeGBmiAlCX51zSvfEjcp-j6co5z6sXsjtEAfR7phEhAbn6qoXtvIZEPFGKU5IUw-GhS0c1WvpmOCqVGohXKnrcMrmTvJBw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Knysna Waterfront Quays, Waterfront, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.069955,
                "lng": 23.0890818
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0683199697085,
                    "lng": 23.0903001802915
                },
                "southwest": {
                    "lat": -34.0710179302915,
                    "lng": 23.08760221970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "bf73204c65816e3e811ba2fc32411fa9f304a42e",
        "name": "Zachary's",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2976,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102036239176057946786/photos\">Ewan Edwards</a>"
                ],
                "photo_reference": "CmRaAAAA37XJcY4ZLOv520b5pWj9U_eIi5YzeJ6qrxMeVK6CAhqjX1JcLIynWpj4kJ1ZAcxH81bcay48Qh4gb7FLsUSOOwYZhXwbGPm6kQeQ1V4feWqztVloOwGRp_oFNjVgY9WZEhA_iY-L_zlNRPXAUYY_mNh6GhT0qByo4XOizJHN8Pt9e-abZrM6Xw",
                "width": 3968
            }
        ],
        "place_id": "ChIJK_KCl0DqeB4RsRCLzX9sJRc",
        "rating": 4.5,
        "reference": "CmRRAAAAojDW34AN-72ipk98LJypyvFR6ZuGrJcmrkmks6PfZSCBLJgD1DZjExXViRvGoGUwRvoOCtm2s4SueHjYhKKSBE8M9efuMjqLBfcIcGaKWsNWcVdLvI1w5ofEr7Nl3Ri1EhBCxsrQtphCYegoeub9Lb7EGhSZueiP_uGAMpKLcl1-qNs09GMEgw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Conrad Pezula, Lagoon View Drive, Sparrebosch, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.03527200000001,
                "lng": 23.045322
            },
            "viewport": {
                "northeast": {
                    "lat": -34.03392301970851,
                    "lng": 23.0466709802915
                },
                "southwest": {
                    "lat": -34.03662098029151,
                    "lng": 23.0439730197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "6029279d500f53d7ff444782753a9416775c3c0b",
        "name": "Wimpy Knysna",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111713628682094952209/photos\">Wimpy Knysna</a>"
                ],
                "photo_reference": "CmRaAAAAJiBW6vfgkBtn0ehHdO_pAIeXWi9QrIzxmy-ugYk5vPjCX-HJaxfrfPW_6XpALvCEHhXXd9uU6612jYgeZl_rozs0EoPMVzOVR1BNOF3emL21JLpWHf3o7NospeDCXG57EhBsdsW3gBlTyL3IQqY5teD-GhS8mvxg9fZtB2rCot3CE5ojIOkUKA",
                "width": 2048
            }
        ],
        "place_id": "ChIJAT-aH5fqeB4RBBIUs6ndtqM",
        "price_level": 1,
        "rating": 5,
        "reference": "CmRSAAAAY8_RnRr__eChCeqXpeT5PVqLSmCNzRcuZMgNEqv6Po7tajvME2RJLL0ocYUXBWdf2juT6JKLRldC0hBamRC9_GUYS_PevJisnThlhFbDFYaTaZ5B-GqYicq3ls-xs17oEhClTFXsXEcVID-10bmmWTOTGhTTRReLbUF3QzCGKx-4-tqImplCGQ",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Main Road, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.036508,
                "lng": 23.047912
            },
            "viewport": {
                "northeast": {
                    "lat": -34.03515901970849,
                    "lng": 23.0492609802915
                },
                "southwest": {
                    "lat": -34.03785698029149,
                    "lng": 23.0465630197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "15c1c5590dc3ffaf2135d7b2e599c2f69b838aa1",
        "name": "Hungry Lion Knysna",
        "place_id": "ChIJMVaAG4rqeB4ROkKheP8HXzI",
        "rating": 4,
        "reference": "CmRRAAAACeJ5JKt7oQ_6NaQSgrQng3f6Z2xKvl58aXIHTyt0gRmRt9okUR5utx43jPfgcAZoA0JcQSpwPXzAHPW7a9DqgD67bnb7YaIE7qvirZtxQ3P4SOnhRqhEGQgG1r6IYLIKEhAnknj365Fo-U4__Yx8OiTdGhSX9B-O_E5OH6qm_Z9vx-v2JLX1NQ",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Shop A8, Cnr Nelson & St Georges Str, Knysna Square"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0345265,
                "lng": 23.0265364
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0331479197085,
                    "lng": 23.0277787802915
                },
                "southwest": {
                    "lat": -34.0358458802915,
                    "lng": 23.0250808197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "5f9ac29ee7f3731518de1c9fbf63be07ef9e00bf",
        "name": "Kilzers Kitchen",
        "photos": [
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111873493593420592253/photos\">Adele Pozyn</a>"
                ],
                "photo_reference": "CmRaAAAAjHyYxdqcpnHJPy_VDx0QHMfM5FtQXUXI_XFJ0W5Kovq1RHVOMjD8Wjnq3qROYfcA39-BJxqIOajee71n04TulVn-s6GKoGZPNoga3Br5aAAkM6hCNSwHKpvgNraQ9FJGEhA7ZjINdfAemBJTkUJXkLe1GhQAJqP6ph3eXakjTpLHxTFEe8PDFw",
                "width": 3120
            }
        ],
        "place_id": "ChIJU52hIpjqeB4RkxRCPENohW8",
        "rating": 5,
        "reference": "CmRRAAAA8UWH3B13yf5GTHy_5SWUVlOGAyAVVjRlUd1bMQxzQ_no50oJyYf_SDm8mAEWrllMGGc9OwXCwIldqwroBnPUL44QOpb97DHbgcLy9UAoqAGWD3XSM2hllBNn2t0eyTv9EhCNg9LElC5IDbJrM2flE1ZdGhTy-T2Xu21aRMgOxYhJXcVfyNPLlA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "3 Roos Bolton Crescent, Knysna Heights, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0414884,
                "lng": 23.0452126
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0401394197085,
                    "lng": 23.0465615802915
                },
                "southwest": {
                    "lat": -34.04283738029149,
                    "lng": 23.0438636197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "8364c6e2549a00f4521f55e273a5b0bad773a710",
        "name": "Caffe Mario",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100017281396705565558/photos\">Marco Zamponi</a>"
                ],
                "photo_reference": "CmRaAAAAxZLWUVjZeAmuEPsmZ74cp9t__4VKkAonGTbbMPbBZfg12LVpVqvHu3zAAFobNRNrdmMjNNwUoho2y8ZFJyibOnmtQip6ulG9tiPgwrh9_55zpNsASnlRmf34abFxgFCgEhBEAqPFsxdNG_vMXtjiIG62GhRHTX5hZCjDYXdyb889PsH_CG18Tg",
                "width": 3024
            }
        ],
        "place_id": "ChIJG2euKovqeB4RHsIvF9Iqu8g",
        "rating": 4.4,
        "reference": "CmRSAAAAXoJZ8Ff6nymM3i2q3-bdrMTneFE_c46S-NT4b32t9y15kYLZ_Zk65p0OyrC4du6oRXvFSDPzAoZfYUzyss1QH9zpX9zArQ23ZCfSoKyvYuTRRlQF1RU-FNH-VHBPPrTfEhAawd-12UcHWtsYqYdQLdchGhSWa0g5_p1cWRH-armhEnWfKqVvRA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "9, The Waterfront Knysna Quays, 21 Waterfront Drive, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0416079,
                "lng": 23.0451925
            },
            "viewport": {
                "northeast": {
                    "lat": -34.04025891970849,
                    "lng": 23.0465414802915
                },
                "southwest": {
                    "lat": -34.04295688029149,
                    "lng": 23.0438435197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "c006f5f099e0817c464bcdc13b44f15bad26255b",
        "name": "Ocean Basket",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101219187671662494811/photos\">Paulo Cordeiro</a>"
                ],
                "photo_reference": "CmRaAAAApMAVf3nlvv52wbXvLIc0u6xkTFepruypnM0DQDXckIIVqk53Ok5TWFv4ZDTx3marQbLUuVqeMtIvxPoTqMVEfO7OSm-E5VX5TryWRPmY8X_0OK9mvLdvHSEj9zblJkIeEhCYA3XE4ZVOt0fqJ0_cyPOgGhSTAorEVmybc9g9NToEsEwix6kMTw",
                "width": 2340
            }
        ],
        "place_id": "ChIJ0wNKk47qeB4RMF4CJDMxqSs",
        "rating": 3.7,
        "reference": "CmRRAAAAgrNpB19Do_JUGF9v7lX9XA26kD_9vfI-6QgsND565PIEafnYbQWjqq7QXTh9aOqerohNjHu4-eyMA5mJqNJOrWVEIBGk_e3tt-k4lp9XwDsxY8XBX3pmxjFEAvSKOu-wEhBXe8AXYWbp-ka7VfLeVHj1GhR4sOksSyE7yU1I3STRky-gvqoIzg",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "21-22, Knysna Quays, Waterfront Drive, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0390514,
                "lng": 23.0453437
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0376748697085,
                    "lng": 23.0467000302915
                },
                "southwest": {
                    "lat": -34.0403728302915,
                    "lng": 23.04400206970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "ad10ceab9e042881978a557d5a4a10e9a9a85072",
        "name": "Cafe Dubois",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110718125437170633147/photos\">nikki kruger</a>"
                ],
                "photo_reference": "CmRaAAAAV7iQ9GRFVdI_atYRG-rX-i3xB4II55hpq2gXGnqVyJYMveGETiq58IQmkFaizrGcHAiZArWkX9iYY-dSDNYalluFm93cTxOBMDznAotnQL5D0T3RvR2QwBPhCEHw0GK9EhCt1l3TeRgpOaWN1wZ6-9miGhTqnr5IwDyCJb5fGFhwpBrazZWhBQ",
                "width": 3024
            }
        ],
        "place_id": "ChIJR8MjqYvqeB4R2xcHvw7QegM",
        "rating": 4.3,
        "reference": "CmRRAAAAnmtRS56zy_4145sBZXywMJlH8LfquodmxcRb9j4CgboEQMkB5NWe7nR0IkEprsqpicGE4vat3jZ8kF9Ss1lnlv2RsBeaptyC30C9je5RZ5ljItFxyjWqKpta346PJywwEhAbkWX7G4ZZXQxw4miuTAXFGhT_owgxskJQrLDCG5zVIy4cqF9Vag",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "6571, 9 Gordon Street, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.04130119999999,
                "lng": 23.04514259999999
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0395610697085,
                    "lng": 23.0464512302915
                },
                "southwest": {
                    "lat": -34.0422590302915,
                    "lng": 23.0437532697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "34662d7cd96edc925da5a91668d24642acc21323",
        "name": "Spur Restaurant",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115333421376430570400/photos\">Berrie Stoop</a>"
                ],
                "photo_reference": "CmRaAAAA33_S72N3QIRqtgwbEouHi0sKbtZT7YcSwuWUskM3O_siDXsCdYWVFqAcggdE0VS1QlM_duLeHgHztiSNevnUgTV_sCR5NXD7ptMlm14vTSiyFSnKQ2HMDpcReJmCOp7KEhDVCYx5R80oUlSPsKTrNhxrGhRipGjSUeksj0Y6hFNEF9xPi8sL4w",
                "width": 1920
            }
        ],
        "place_id": "ChIJ7wdTJYvqeB4R_w0lHH4G-y4",
        "rating": 4.7,
        "reference": "CmRRAAAAG7RuzrJeMDFERB-ESGmIEo-um5BAgIU2YuFEC6MzXRGfXzKFCAGuhnYAaiBSP9OU0DwiLrR4cORkxlTnMt6g7dVQXsCrlEjkH1rWRxuVNaOhfLEfRycZZT6-nZzRzuxWEhA0VJQ-FBpj7SRvfbYVa61UGhSwjEA88Xp44b4IivawXXmpH7hznw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "1 Gray Street, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0398567,
                "lng": 23.04538879999999
            },
            "viewport": {
                "northeast": {
                    "lat": -34.03849811970851,
                    "lng": 23.0466722802915
                },
                "southwest": {
                    "lat": -34.04119608029151,
                    "lng": 23.04397431970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "5dcc6362bc55587619d5c0331d67a6c63d36bf3b",
        "name": "Knysna Waffle Factory & Exotic Milkshakes Restaurant",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114998721234386927397/photos\">Mark Kaplan</a>"
                ],
                "photo_reference": "CmRZAAAAGNa0-GvJVCznnAq3Idq6Upxs-3e6rlv0L2K8YNCWNeKXaSuLc6_4tYXO1MsCIfKLxeTM1mrhQ2ei2iU2sjksL00Y1aHw-PrSlG7mgEdSZJnl9ybIFsBJvV0mH1LscgPiEhDVY-pteWF7bDJo2lFh4mfqGhRF0yZghOCRFBe98ttQZP0i0DqfJA",
                "width": 4032
            }
        ],
        "place_id": "ChIJkRvsBIvqeB4Rltfz64wr018",
        "rating": 3.5,
        "reference": "CmRRAAAA0W9eM_0Cj33Bmq9ohBFk21MLlWqg8vnj1LK02if5CbNAee1DJsKCcjshnehUdqeFfo2eQ2Ywkz4JIqdU_UZ4k8kMyYQ-mh2mPrU5Xr9MMfTuNNOJQAHAWljN3nJ57wmbEhD0B8uboJ7vUaklBVHUXiOMGhSclHJZ-UJ860-v0naSuAi-srqFWA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "1 Gray Street, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0351357,
                "lng": 23.0444465
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0338065197085,
                    "lng": 23.0457218802915
                },
                "southwest": {
                    "lat": -34.0365044802915,
                    "lng": 23.0430239197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "67fe7f1a28102fb86da47097f50a2230e535af8b",
        "name": "Lunar Café",
        "place_id": "ChIJrd1DI4nqeB4RuPMaFFFoZ0U",
        "rating": 4,
        "reference": "CmRRAAAAXPa6KH5sydJ44c16CHMpKXFRItN5oPf4M2ubZIfJSd-s2i8z1O6wEcLOWA0-MZZwwtVJfTeFFVmRcEbDuuLywMGpnk39wGrfK9CKjOWkPexj3tjzKKZ32wk3aW7xJnPNEhDB4589cEQ_8KHx2r6vAHHOGhTtDDBHFdH2IGsRMEKl09yK5eT8TA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "z2-09, 51 Main Road, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.03409,
                "lng": 23.04413
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0330680697085,
                    "lng": 23.0454871802915
                },
                "southwest": {
                    "lat": -34.0357660302915,
                    "lng": 23.0427892197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "id": "c9bc1b9447c76d706cf9ab6fcfefbb283cde8ec9",
        "name": "Polvo Coffee Bar",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101870343244206199970/photos\">Jana Vieyra</a>"
                ],
                "photo_reference": "CmRaAAAAcy2yhsBgjH-TZz2NPNFqBpXhlO6hHvGJHL9uQN6Y9pmzlJokhYY845Wt--dHIWNlykPwtiOT5m0z3Ittdr-Odp7OKlU9idwVYCvyHsJZbeG0GPcjsARrkq7ZjxXcHqhYEhDgWgAs9AVg-n8iaOLuGHMaGhRFBMFpMqUzCs_YuJ0ckoDkkwBL_w",
                "width": 3984
            }
        ],
        "place_id": "ChIJT6Dm3ojqeB4Rgmx1ex45nbE",
        "rating": 4.8,
        "reference": "CmRSAAAAfZhjK6rAElB_kyePeYFTuiz8VBmlowCo0PLNe4u9u1cgtoZYM1x22WF3rkbUEbp0toG-7SAjSns1xmTHxrZwT1-XNZ1r7bzdO7BJXR6gCDmFAlX2EzUiHqSFwOP5-d0_EhAZPV25lqwjEOZtwDkuk7XfGhQv0Ua2F0WeR-lzETIn3Skto5b6QQ",
        "scope": "GOOGLE",
        "types": [
            "cafe",
            "restaurant",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "50 Main Road, Rexford, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0350013,
                "lng": 23.0449026
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0336523197085,
                    "lng": 23.04625158029151
                },
                "southwest": {
                    "lat": -34.0363502802915,
                    "lng": 23.0435536197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "77e5265121323eb74f93cc8dcd2eb94e084dbc64",
        "name": "Wimpy - Knysna",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104380467632775643930/photos\">BertlDS</a>"
                ],
                "photo_reference": "CmRaAAAAZqTQ3sEYzoqK0EKPRRumSKoe-RYk2t6h-gSEOQCrdz_OT-UuP1l9IJbf_AKrzD_HGjvg17QDPY0ChPK_3y-d7jAFMdNJ2sUHLXf5kYoIJ12rRHENtmDoKUEufOQkrrtGEhC17saCCwnGbn6w0q6s1xDZGhQK5bZ_ycX0Wm1vq_FJq4ZHLN7N0g",
                "width": 3264
            }
        ],
        "place_id": "ChIJwzbgDInqeB4RxBv94Jdj124",
        "price_level": 1,
        "rating": 3.9,
        "reference": "CmRRAAAAKzuuq1RJcnzcnYLeVTkWipujZXf1AVYsa0-wI1nBpZZ_8uFp5qlXyFo8zNgT9-Yf4w0G_sQvJdK0doinrd6bC6bw6SDa7Gi_J27BNt26ei6CxZe8Uzqeatr7igeaom8PEhBl_8nrPLdtwOKspGKV3urNGhQZEmrTVfyl8rfccJCpEcUTg2vp3A",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Shop Z301 Knysna Mall, Main Road, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.03439,
                "lng": 23.04446
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0332201697085,
                    "lng": 23.0457879302915
                },
                "southwest": {
                    "lat": -34.0359181302915,
                    "lng": 23.0430899697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "a84153e39c33accbabe5dbc91dfe18d79c6b28e1",
        "name": "CoffeeHut on Main",
        "place_id": "ChIJ1TJ0H4nqeB4Royk5toEgJsw",
        "reference": "CmRSAAAAT1S_PGVp9ObHvZbG4EJy-aHz99I3t1tfGEh8cmzp7M7kz4G8BH9fVtYeHuQNxF-K9wDk6XyqUrcjyTNcy-marnmAvT4QiuCH8QuB-lbffTGvazcv5_f346oye6q1CH40EhA2-hfLn-sIBI0_Un_3VHP-GhTbsDhAfH-UyNqIpE_PIXneah25RA",
        "scope": "GOOGLE",
        "types": [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "48 Main Road, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.041549,
                "lng": 23.048898
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0402000197085,
                    "lng": 23.0502469802915
                },
                "southwest": {
                    "lat": -34.0428979802915,
                    "lng": 23.04754901970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "135cd160e90aec303e468080082b5f8e8427c773",
        "name": "Rib & Rump",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113351183846659196547/photos\">Rib &amp; Rump</a>"
                ],
                "photo_reference": "CmRaAAAANUpY922IvP1oM2EN6GAoCgfPFM0Yh2snFfwji-h5il2_66nHHcG4fX-7w99vyPMlrsLVeGnBe7-CVhI3vpzS_pPGZIG7HbW9Brv2NBG_82KuyQmRxHqAZKCaygLg_7TFEhDhTYDRurZt-c1G1MayvCxsGhQPf3f8BnLyN-99JcpmoGCr3cxxyQ",
                "width": 1440
            }
        ],
        "place_id": "ChIJu9pR_1_qeB4RTqQPRuuRUXU",
        "rating": 4,
        "reference": "CmRRAAAAmr7ivbyKRIcY24ZPE4lsx7R6d4pXgc3EWQ1RU6gOpfdZopRL7Gyvb_lceJrSkSxdqPIk_DMuffzeNzoUqrWNQtZVO1V1GFHR6Dkoi1wg8hec-dM4HtkIXtqvQm415KQlEhAHsgOX706UJ6qzBKcETFViGhSRwdZcL4tyRHdxNCD4N4AEsbKRbw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "-34.041549, 23.048898"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.041493,
                "lng": 23.049198
            },
            "viewport": {
                "northeast": {
                    "lat": -34.04014401970849,
                    "lng": 23.05054698029151
                },
                "southwest": {
                    "lat": -34.04284198029149,
                    "lng": 23.0478490197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "ab9e8633144e399a0f20afba078338b90dc87593",
        "name": "Freshline Fisheries",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 317,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105155999615233148754/photos\">Freshline Fisheries</a>"
                ],
                "photo_reference": "CmRZAAAAieByoZRrb6tCnaMsNzfNsRcHEFJ1TLNVNoo-PFMkmYfC7RiKTJVFRoPBQp0Sk9tH_4euvFUg4Hk9-auF2addL4qtHJf5wgS-NkZE9V_mVGxmpfihbX07sAAfK0YU-l3REhBwDAhA9vhA2xo4cHCAOl0iGhQ36Vk9Qezne6vh8Bs89cGKqPsDCw",
                "width": 848
            }
        ],
        "place_id": "ChIJpXGv-1_qeB4Rs5bYuOrcrUo",
        "rating": 4.5,
        "reference": "CmRRAAAA9pKtbHijv7Sv46nmVzNThTRlw8XhdwI2zrFb1yFOa98Vi3mDNH-787j6-pEY_nSJ-bMqgUIShWSvecOZGbP5knICjDxz4s-zSIhmJAmc7qtlDWDNhBahwN3EIZA9EfYbEhD_TPeLT-8B4FRvr-KzsElEGhS_cyaYXf5hOjziHceTPRMl2xFYUw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Railway Siding Dockyard, Cnr Long & Waterfront Drive (Behind Tait Marine), Knsyna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0370974,
                "lng": 23.0491397
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0357437197085,
                    "lng": 23.0504481302915
                },
                "southwest": {
                    "lat": -34.0384416802915,
                    "lng": 23.04775016970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "826ebd89e389256dac9bc8ba495eec30976c8272",
        "name": "Bluelagoon Fish & Chips",
        "photos": [
            {
                "height": 2576,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106034477828456246904/photos\">murray ralfe</a>"
                ],
                "photo_reference": "CmRaAAAAMpUnNSxT6Ky9JAyEvJmdPmeOKR5jlO8wjpT61w02vNVc9McpF9xGuNVJkCZAA4kx6aVYeV4FmFtL5h5EeM1n42Zkidp3fi_5jOMaPYHCzpjbiiS6zbqxHKrro0uXyCx6EhAjNZbtMTloUbGSlkWs5WZ6GhS-VXAmkObPY7zpyFzyDcNB03xfLQ",
                "width": 1932
            }
        ],
        "place_id": "ChIJFYWi52HqeB4RiTG_vUdrNjE",
        "rating": 3.7,
        "reference": "CmRRAAAAkwtC1VCv3cbRGHkrWXYOlmrGWRjpiWYuLfKLr8vEUMrliNeeQolTCTzfwinUxbDefCjzRREHlzmRN_42xC8t-_hCqWp5KBoUqR8h5KdKJqsAicXXChh8ZuhfqmQqzMqUEhAGON3pe5DyC2LhsEbnPj7XGhQwPB4wpLgb-Y1UixOXZbH8RFcYAw",
        "scope": "GOOGLE",
        "types": [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "13 Long Street, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0414615,
                "lng": 23.0500024
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0401206197085,
                    "lng": 23.0514278802915
                },
                "southwest": {
                    "lat": -34.0428185802915,
                    "lng": 23.0487299197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "b8163e9bed76aedeeb1a0fec6c51d03f6718363d",
        "name": "فرش لاين فشرز",
        "place_id": "ChIJ_WKZ5l_qeB4Rs7FGWmrqKDg",
        "rating": 1,
        "reference": "CmRRAAAA96bbuBdHLDaDwkeO-YP1kTgBLOd_Bhq4tO-HVZP-cAWKzfhH2GUOrMc20qNhFvy628FHfzqo-btmzu7YvDPOPFZwtfrxhHDz7QwatNQmGmfZFU_e6ACF7uVLUaOWq0PTEhAY3ceZlpar1Pa30VoJdduuGhRjF2XOX8FoKA2hdwDgQCr6snbG_A",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "10 Auction Mart Avenue, Knysna Central, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0402743,
                "lng": 23.0514199
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0387881697085,
                    "lng": 23.0527797302915
                },
                "southwest": {
                    "lat": -34.0414861302915,
                    "lng": 23.0500817697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "d6b37f29e80c6f15be73aaa00bd7248b7bfd85f7",
        "name": "Fireworx@Firefly, Spice & Tea House",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 4128,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113021554942396607612/photos\">S Hadlow</a>"
                ],
                "photo_reference": "CmRaAAAAwz5jSO3fLlZjUDkOsHXP_Wj2jNWAzgjWYKORaEUKVRBVAX3wLIV1oJC9IbSMlSM99qhNXZNL2WF7kuImKXL4KHcAwPEFog97WfDS31In0ia503muC2NHvRX3f7BY8qCoEhAkRlqMGv-7PlAPwHjf5_PDGhQmpoDyXF4z3BwsBFNsI-QoNAkiog",
                "width": 2322
            }
        ],
        "place_id": "ChIJ-QpyfGDqeB4Rhi99EiBobLw",
        "rating": 5,
        "reference": "CmRSAAAA_bp0cwnizKZwGz-0vqtAg6IovMmFIPsRONaz419hyJXrgeZdfJ5BFN0Ar2jqaUWvE4-bCL22H9RvlgY6e87wYOtFS06YELkzpJcO9fDJjPMrpiVnBrNBpd4SXx5pCvplEhBRpTMsPd2OOW2rrC85Xlj7GhQg-oFHT4DEW8-KzGIrlRgNT1yT4Q",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Shop 4, 43 Waterfront Drive, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.014142,
                "lng": 23.0326243
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0127930197085,
                    "lng": 23.0339732802915
                },
                "southwest": {
                    "lat": -34.0154909802915,
                    "lng": 23.0312753197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "704656301849dbd480521a2f55f8ca802ffefb7e",
        "name": "The Farm",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103877212884899326047/photos\">Barry Herbert</a>"
                ],
                "photo_reference": "CmRaAAAAUyC_sOGvk_oDkCDYYcX8dAkxLwLIwPCHJYOeqBI2p8yV5aWiD-ksLqjpxp8lAxQZl4YVPunEkf2Tgt7fIUCTSBYSYDmrCWtwQM8ykfI5xfAFT_wf8KqdNluCB8HjzbG5EhALXvCA8nRpnEZaBnTjJTVGGhSYFLKfbWtfF5U2HK2jAETLlFERdA",
                "width": 4032
            }
        ],
        "place_id": "ChIJ2WGC6iTAeB4RQlJhiP7tp9E",
        "rating": 4.8,
        "reference": "CmRSAAAAs39fPdwGt98S-9SJbbXWLDooke28gzANSPsEJ1Ok-RLFkfidc2bk7i_ex81pDPwHIdeaRO9fJED5q6_10PTfCkprbnnlZ7DNXiCZM6pOn0gEjob-26UvwIzYNXpEszUHEhAtXAHCYjP-g_APBj25SXS_GhRWOscuDAEJlQXzlX29PHGdpl3qlQ",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Old Cape Road, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0436632,
                "lng": 23.0690159
            },
            "viewport": {
                "northeast": {
                    "lat": -34.04231421970849,
                    "lng": 23.0703648802915
                },
                "southwest": {
                    "lat": -34.04501218029149,
                    "lng": 23.0676669197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "5a9712bf6590d091dd200d690c446aeead57ce47",
        "name": "Bosun's Pub & Grill",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108269243675119942541/photos\">Charlotte Rossouw</a>"
                ],
                "photo_reference": "CmRaAAAAZwMUDjA6U1ydKYa7oKbkNjdcWrJ_VtK2VSfuJKvZQO8mWTv6qOiaSdDbIly-JmfMtee6fCjXIi1PJzhP9V5QNLZB2vh_iLVHpZTU9uYgDkyPGspqSxXgaHXmyqvWgU43EhA6FgYaCaDAgXcG0X5jh6EFGhQlzbQ4KzpowA1QRzG1Wzk0_5jk8g",
                "width": 5312
            }
        ],
        "place_id": "ChIJ2xnxSkHqeB4Rd7fSodM3lYw",
        "rating": 4.2,
        "reference": "CmRSAAAA6vlvYRQsIOEec7lnYs2zA3wK5BravRk3Bwm9FQ4_RD5yfiEotmsSHUIg4oDaXduG-wpG4er7vxXHqgPPb03ieBM9n6QbRuEgC-4VVd8bR_lrFvH4GUe1gwuw7x2cYRG5EhDI-fHzTU6pyGjgp-lDcoHhGhRfPecZREftDYzU1zgZ_90XpMtPQw",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "George Rex Dve, Lower Old Place, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0734156,
                "lng": 23.0201635
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0720736197085,
                    "lng": 23.0214951802915
                },
                "southwest": {
                    "lat": -34.0747715802915,
                    "lng": 23.0187972197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
        "id": "59ab700cf986aeba267493f939429ea2d5fed1cd",
        "name": "Brenton Haven Beachfront Resort",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 512,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102391130682587678879/photos\">Brenton Haven Beachfront Resort</a>"
                ],
                "photo_reference": "CmRaAAAAQEocjU2Utb3_wQbu2lM7qhRoghXcek6fdF1NGhzJpqb5ym6PgMIwAkwN6FYA5C47RSM5f0IadnpO07zZZE8b0tOTWa6d8xWXC1T5Og8Q6IYVJ8YsZQ4R3Sy6YXoJNWryEhAt5ipKCz28re6QSbVzYM6bGhSLIx4Q_QDGXvJYX1E0gmY7AeugqQ",
                "width": 960
            }
        ],
        "place_id": "ChIJZ0lLWSHreB4RzVMCjAyQxRM",
        "rating": 4.4,
        "reference": "CmRRAAAAJbC0w3fHRL6lpSmiNuf0ZssC-n-jWhoCjLNE9fW6r8Oj9flSzTVO-iwxwtdGELkVibABc1DthcB22aW5fCezyLGHP-yQX7jLyaDgNTBXBUK3FhvHxIv52ALxbQIo6XgxEhDD5zt0up0NjSMA_Q6XK-2IGhTQvUyGcMyD6J59GJosbyQh_6JmfA",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "198 State President C R Swart Road, Brenton-on-Sea, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.07347,
                "lng": 23.020029
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0720903697085,
                    "lng": 23.0214536302915
                },
                "southwest": {
                    "lat": -34.0747883302915,
                    "lng": 23.0187556697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "8fa34116d44468dd0197865dcfe1e6b9d414f30b",
        "name": "Butterfly Blu Restaurant",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 724,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116940503908614406878/photos\">Butterfly Blu Restaurant</a>"
                ],
                "photo_reference": "CmRaAAAAfefbq92ZLoBMcQrj94excqG1v5PiKjwKXP3q5BVpuN8SqSFItkD4CGlowvZbBg_YnU__JB_-vOrIj5ZRkrIJImvgaIPWj-4eMBEYCCG8JS51QORuHTm23X9iM2knbqBkEhBLkShB3xu6UpdkxTYrk6XCGhR58WMyz2JPOUiGxN-M8Sx2NV-9Wg",
                "width": 2000
            }
        ],
        "place_id": "ChIJP1_tWSHreB4RGfPWo_qHXIg",
        "rating": 4.2,
        "reference": "CmRSAAAAqEmMgFSXoHiT0nDMKKU5TXKzZKxCpOFoF_keuTtRrAxCNrbXB113g8Z_qnN0sNDBjTcOwSxWS-1HAeGWO51J5Ynb0jomSatg8idJGZiK8BfF42bSGFshHxZKM1QOay_9EhDYBdwMteX-XEL6QWu-xFS9GhSD_8-jaNKgjjFuhYDVBeizyLSUsw",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "198 State President C R Swart Road, Brenton-on-Sea, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0629966,
                "lng": 23.0711121
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0616620197085,
                    "lng": 23.0724108302915
                },
                "southwest": {
                    "lat": -34.0643599802915,
                    "lng": 23.0697128697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "bbbcf9af34ffabddc2b66cd56a98b4b785620dd9",
        "name": "Blend Country Restaurant & Pub",
        "photos": [
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106553526627870072242/photos\">Annelize Botha</a>"
                ],
                "photo_reference": "CmRaAAAAZQSjamjJnIHVuqS5kYuoNhrouGuFFujio6jSNdq3RuZSE_yAuE-fGAg33f8mWgoKFd6bJc-IS3cX814cty13ZELf08p_Ip08w3CV2VIxQ1nqor1XqFBsIwuPzRilW6e0EhCkk_bh9x_gLLyJf4cTPsjcGhRQ_sC0zssvEerQ4N7Uf3dXY9V6NQ",
                "width": 3264
            }
        ],
        "place_id": "ChIJpRs53rXreB4RXmavE95MhDo",
        "rating": 4.2,
        "reference": "CmRRAAAAsxBFfxj0yfh4jW6i4HMnXNikuZ058Y4sYhadUAHUkWzjYPl9syQpWE5TQ6JAuOzdChFrJPYifeWjHrv63stLrG5ko631JbZBUv7S_QAwUSGSLPTStQyCTl5W9ksqO04DEhDdkNdrVVEG2BWeHcZhUxYoGhRB4bsHLeG_ok78pgPE2f-69YftHQ",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "George Rex Drive, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.080888,
                "lng": 23.064282
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0795390197085,
                    "lng": 23.0656309802915
                },
                "southwest": {
                    "lat": -34.0822369802915,
                    "lng": 23.0629330197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "faba9e24fde280a5fc8deb6352e369c0dabfc558",
        "name": "Head over Hills",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108752723798321112921/photos\">Cindy Nair</a>"
                ],
                "photo_reference": "CmRaAAAAVmDcArzWv0vhvN6jJjyp7fxFeCohHhIZz_kIR5X3c_wmtLzEoehxQ3uMNHOvwXnayhiIYXwy37IEqeXtgL5itYtwMwfXoH7BvXrJwTpqZJlSTfWg7FS82OAx_6h2gLAsEhAUU1IAxy0Y-ZqaNTL8A0ozGhRevpDjuvqiISXPAazSV9nf8ZIO1w",
                "width": 3024
            }
        ],
        "place_id": "ChIJSbumL5breB4R6BpmEuspZKQ",
        "rating": 4.6,
        "reference": "CmRSAAAAPXRiVriHW7b-qG2j2nSmSYQXILxFEATbc2JnDaB6bCk7ldRl6ydLNMe50PeGz-tBopKx04qAVRE7xbbNcV5HlEzNSy1GJQjbbl_W2L4QGC03Yrja8elbKGxUGnVJJoFqEhABu4-Ov8rPg1Y5_kYt--7lGhTaimi0TOoEKfQJaKKtE0eAnLnb0w",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "22 Glenview Drive, Coney Glen, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0883596,
                "lng": 22.9739186
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0869811197085,
                    "lng": 22.9752809802915
                },
                "southwest": {
                    "lat": -34.0896790802915,
                    "lng": 22.9725830197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "86c628e5d1a00e3a24003c5d3420b900ba9b586c",
        "name": "Buffelsbaai - Waterfront",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2204,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104800928082682558654/photos\">Wayne Swart</a>"
                ],
                "photo_reference": "CmRaAAAAqEi5sQbz2ODZ1ASMbTZFwiJDdqykhyGm6S-6_0Gts1j44_rmaI2TFlo-1eqU5i1UUMcknSiLNG_dgfDGxWZFaVwJ9ta5p3mXWVsEa8ssnyJ6FyIBE8cnfysBYw9XgjTLEhDkrHidN22G-zmP14LB5cHCGhToXajnOOWOOiRd9-6efQzP4DbNrQ",
                "width": 3920
            }
        ],
        "place_id": "ChIJE0Joj-iUeB4RRVYfWSFpczI",
        "rating": 3.5,
        "reference": "CmRRAAAA45DyyDTqaOIvED0Wdw3GyBx1JT8KboQfj-ztskPdMUqoyFmyt_st5iHokHZ_jdfESVOlqKCP0k0vb17k30PKXkTdCp13pS4GGecpvOZKFRlJm1poDffGwglHDvT_3KQkEhA7yQkEYRpWRDS_PouCxHG2GhT_BmkqIqvWX6Km2DYtGIUEoBX-jA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Walker Drive, Buffels Bay, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -33.951378,
                "lng": 22.946341
            },
            "viewport": {
                "northeast": {
                    "lat": -33.9500290197085,
                    "lng": 22.9476899802915
                },
                "southwest": {
                    "lat": -33.95272698029149,
                    "lng": 22.9449920197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "4defefe3c66092c6c86eb91e9a7001b98e36ad6e",
        "name": "Totties Farm Kitchen",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107463546633281401409/photos\">Tim Anderson</a>"
                ],
                "photo_reference": "CmRaAAAAskyH6u3NjwOxgy5JBBhnKVNquC5hgrUmDH0TRONbfNl3YLYHjFYxrzZK8X5zOdAhGCvInJ3i2OOvYGomFYXxJyFDF3wE_iCOcJP_XMwAetpKgLfGqxcftGjJS09xXqnvEhB1yBt_SaN0xsOpA61NQfEbGhQ6HokgLBZem80MOetsi5zq-y2PMA",
                "width": 5312
            }
        ],
        "place_id": "ChIJaSMTFyy5eB4RyvT8kl8TYV4",
        "rating": 4.5,
        "reference": "CmRRAAAAU5bb8uo8xBUarifI53nD0bHaLpG_QWuJaYPJKSHyVQgR71zHWNeyK-yi7eUP9nKcUuimqzgBj5IZAaN7N375wfeUt_VUD4sZ_vYTfDkyApLRVt5Bluz5z67S1B1NEqV7EhBMPLzOb50R6eNXrLPsAxqpGhQuqbFbI27A_4fbmkpz-NQ4MHstjg",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Rheenendal Road, 12km along the Rheenendal Road, Knysna"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.027437,
                "lng": 22.838033
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0260880197085,
                    "lng": 22.8393819802915
                },
                "southwest": {
                    "lat": -34.0287859802915,
                    "lng": 22.8366840197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "d34fbc9bdee444c662570d2093c33425d2d82baa",
        "name": "Bistro on the Lake",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108104577498132883701/photos\">Bistro on the Lake</a>"
                ],
                "photo_reference": "CmRaAAAAMfxq0ONjl8mo6s7900ymq__-dtr6EnYYh9bjsTAv8eUlIEEFNWFDB1STngbk4Tn1u9xur5Q0GCpNYOmFjZ9IK1t9s9k3owo1aEHbHSOmoZKzGtDfuhlT7v_1TlGfWokjEhCor26kmqivLDWXpomkTDHWGhTdiRTLusabgJjX3Y00wIpieY7bVQ",
                "width": 2048
            }
        ],
        "place_id": "ChIJa8iLqBm9eB4RwvYiyNrLYhQ",
        "rating": 2.5,
        "reference": "CmRRAAAAWOcr5D34iqnyeVADBSa4C_nPLyxxmLN71MVxpfXJvIXMaUeRTbpvGjFpE4pmIJriUEGZkSSN-QpfeqzupOFQ0Pf88yLsMnJm17kL6JhP4kt4opiHN6hS1HFHGVpV0MgOEhBjUP6k5u54sQF2c1TNckvKGhQb4SRwjF7Erd2-rcpE13-FNrvpwA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Lake Pleasant Living, N2 Groenvlei Rd, Sedgefield"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.02509930000001,
                "lng": 22.8333821
            },
            "viewport": {
                "northeast": {
                    "lat": -34.02374981970851,
                    "lng": 22.8347814802915
                },
                "southwest": {
                    "lat": -34.02644778029151,
                    "lng": 22.8320835197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "078543d045ea38c18c9bb59b07cc19927f4748e6",
        "name": "Lake Pleasant Garden Bistro",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 720,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109134155706677643088/photos\">Garden Bistro</a>"
                ],
                "photo_reference": "CmRaAAAAvFRS7mcny2lh6c3d_UH94oc0hBdJL1c5IoQB0qgOsSFVpNaGHT3T7jBFwoiEnN5JrRrRu37mDFj_WM2kR9A4DR0xhkXvXvwQLrqBM2onsCNT199wHl5cNSpPWB6IyCkdEhA0BtjMHyZtWvs3jqP9xSp-GhR_oPSG4KwybcFjtb0tsqXpSykY7Q",
                "width": 960
            }
        ],
        "place_id": "ChIJxbtRUswa1h0Ra2_X9OaYfa0",
        "rating": 4,
        "reference": "CmRSAAAA-hbLTVVmXf9xEb2i-KpgShJ4__yni2AIc1cZD3o_XhO7BaMlB25O8cexlxzVysDVGeddQSI0C6WPa_2X1QzgEPsiWtnqLQ_S4Ds6zEbZoZbbKMNN2QP-4QsQYkJV-ZHPEhA_cumEKIkkaIsny7DQiSOMGhS6L8YE9RJNwNzIaRGqIXDChK0qYA",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Groenvlei Road, Sedgefield"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0157197,
                "lng": 22.8024107
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0144209697085,
                    "lng": 22.8037327302915
                },
                "southwest": {
                    "lat": -34.0171189302915,
                    "lng": 22.8010347697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "5a3701800541021f0fdb87d55b7ed8900e465605",
        "name": "La Piazza",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100587705313694189464/photos\">Robert Dee</a>"
                ],
                "photo_reference": "CmRaAAAA29eTRWquU3IVeZ-rtk6pK3HpjUbl1_b4Hw473oM4uG-0xqUrnTagMl9q-vqyjd6qgxCN7-2U0iTYmBNKAT4308HuCHJSlfw5c7YVsOyR85CYf_KObUEcI9qHclwemzlmEhBVRaiGAaqr8ZHGQcc-fgqbGhS7c3VgzB6dHv2oZM_W12anKVRafQ",
                "width": 4048
            }
        ],
        "place_id": "ChIJp_AH2DGjeB4RYWEek7j0H1w",
        "rating": 4,
        "reference": "CmRRAAAAdKRzahq_EL8epgdtnsnDXUR7kp57Bdpa1vtei_C55RnGlMLAlKjkXlACkgIEOpJLt_H1x1oU-JzbwpNDouOAxAZTNKh287FnIIqA7Ii7ZEM8HZiOVK911w3dK793khAzEhB8EtqitUn_-BACowh1sTb4GhSRb79MOsnlbGlnSqSLJALtUvvJlg",
        "scope": "GOOGLE",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "2 Swallow Drive, Sedgefield"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.0146839,
                "lng": 22.802699
            },
            "viewport": {
                "northeast": {
                    "lat": -34.01333491970851,
                    "lng": 22.80404798029151
                },
                "southwest": {
                    "lat": -34.0160328802915,
                    "lng": 22.8013500197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "d2395395559f886af31e1781f48da0dba889ef4a",
        "name": "Steers Total Sedgefield",
        "photos": [
            {
                "height": 500,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113314449243727803895/photos\">Steers Total Sedgefield</a>"
                ],
                "photo_reference": "CmRZAAAA66_-JDtzhyfCiz3kyefNjHknMPTpbDqetySvxKqOqUcSYDPgbSVQitfLZFlyb_VtuqPZV4M5DGsale-fTSel5iskI1PuKqHZ36EcvSmhXqlrqKWGfn4SK8TpqW3koww6EhCt2jJGfV0c9506cpDf2xAxGhTo6lS8UxaLXh12RJ_YBNZEH4NtkA",
                "width": 500
            }
        ],
        "place_id": "ChIJ5cWpxjGjeB4RpiqH2GIqKZE",
        "rating": 3.3,
        "reference": "CmRSAAAArIC4WE-Fu3S2Cds4-nq8zS5vxLKZYej-P-Lx-45xZZ_hYAkX69h5TSJz2PAFPy4Rqko5eML9jvpTUWSk_9xHqq8APzqWg-35DvceQFCgofv8DjtpoBdpNCIKifKtkOWDEhCPKjb3Tbld0WhhLCrpCTzDGhSgSJ0zyKRROWxGzRXtSH1hBKeAfA",
        "scope": "GOOGLE",
        "types": [
            "meal_delivery",
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Total Garage, Cnr Main & Kingfisher Road, Sedgefield"
    },
    {
        "geometry": {
            "location": {
                "lat": -34.05124,
                "lng": 23.27361
            },
            "viewport": {
                "northeast": {
                    "lat": -34.0498910197085,
                    "lng": 23.2749589802915
                },
                "southwest": {
                    "lat": -34.0525889802915,
                    "lng": 23.2722610197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
        "id": "c3b7c612ae69559fd52c811e8dac8cf8262229a6",
        "name": "Tsala Treetop Lodge",
        "photos": [
            {
                "height": 1800,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111425142356362621378/photos\">Tsala Treetop Lodge</a>"
                ],
                "photo_reference": "CmRaAAAAzZCWr8Y9YUbuJlTSqjjvKSSE8GtMFTF2pk5nSmKAkgV2a9oPZbhkW_wsWcBNzcjza3pF7deDWPdpuLmerGw6kxaRcCBIUZ0Q8P9SFnbEXwx-XowosWTumkjYdb8UWi3_EhAzUvNPJc13Eqkp4Kxig3aXGhTDVBXV6rNiyjVY8KQgkWlTbay64Q",
                "width": 2700
            }
        ],
        "place_id": "ChIJNWu_EqXmeB4RsR5CyDxIZaU",
        "rating": 4.8,
        "reference": "CmRSAAAAMz2rraERhH3J7efV01LoSw_KDFZ4_svW4AoQG9tYTCCHhBH2zRwLQphilvqJwZB4XW9XDfiW-zF_iaTzqMZ9XpB-GF2wvjDymurPz4oWxWK6szBYRUREwdh-UTH20a4LEhAfjAbJ2sdWYCd5ogGM0mRMGhR5_pI1E3Aw4K6tlNwVyLBg74WouA",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Off N2 10km W Of Plettenberg, Plettenberg Bay"
    }
];

/*
restaurants.forEach(async (restaurant) => {
    const restaurant_details = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${restaurant.place_id}key=AIzaSyCWrFyrqGWvGwlZFOFIpE-AF-AeQfitG-8`, {mode: 'Access-Control-Allow-Origin'});
    console.log(restaurant_details);
});
*/


class Home extends Component {

    componentWillReceiveProps({isScriptLoaded, isScriptLoadSucceed}) {
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
            if (isScriptLoadSucceed) {
                function initMap() {
                    var uluru = {lat: -25.363, lng: 131.044};
                    var map = new window.google.maps.Map(document.getElementById('map'), {
                        zoom: 4,
                        center: uluru
                    });
                    var marker = new window.google.maps.Marker({
                        position: uluru,
                        map: map
                    });
                }

                initMap();
            }
            else this.props.onError();
        }
    }


    render() {
        return (
            <Layout sectioned>
                <Scrollable shadow style={{height: '500px'}}>
                    <Card>
                        <div id="map" style={{height: '500px'}}>
                        </div>
                    </Card>
                </Scrollable>
            </Layout>
        );
    }
}

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyCWrFyrqGWvGwlZFOFIpE-AF-AeQfitG-8'])(Home);
