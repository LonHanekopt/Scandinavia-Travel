<template>
    <div class="container holder">
        <div class="heading">
            <div class="image">
                <img src="@/assets/destination.jpg" alt="plane">
            </div>
            <h1>{{ $t('Introduction to the Travel Information Page') }}</h1>
            <p>{{ $t('Introduction to the Travel Information Page paragraph-1') }}</p>

        </div>
        <div class="buttons">
            <a class="link active" ref="sweden" href="#sweden" @click="toggle('sweden')">{{ $t('Sweden') }}</a>
            <a class="link" ref="finland" href="#finland" @click="toggle('finland')">Finland</a>
            <a class="link" ref="denmark" href="#denmark" @click="toggle('denmark')">{{ $t('Denmark') }}</a>
            <a class="link" ref="norway" href="#norway" @click="toggle('norway')">{{ $t('Norway') }}</a>
        </div>


        <section id="sweden">

            <div class="heading">
                <h1>{{ $t('Travel Guides and Best Practices for Sweden') }}</h1>
                <div class="image">
                    <img src="@/assets/sweden.jpg" alt="sweden">
                </div>
            </div>

            <div class="flex">
                <div class="card">
                    <h1>{{ $t('1. Essential Travel Tips for Visiting Sweden') }}</h1>
                    <p>{{ $t('Essential Travel Tips for Visiting Sweden paragraph-1') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Sweden paragraph-2') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Sweden paragraph-3') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Sweden paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('2. A Comprehensive Guide to Stockholm’s Public Transportation System') }}</h1>
                    <p>{{ $t('A Comprehensive Guide to Stockholm’s Public Transportation System paragraph-1') }}</p>
                    <p>{{ $t('A Comprehensive Guide to Stockholm’s Public Transportation System paragraph-2') }}</p>
                    <p>{{ $t('A Comprehensive Guide to Stockholm’s Public Transportation System paragraph-3') }}</p>
                    <p>{{ $t('A Comprehensive Guide to Stockholm’s Public Transportation System paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('3. Exploring Gothenburg: Top Tips for First-Time Visitors') }}</h1>
                    <p>{{ $t('Exploring Gothenburg paragraph-1') }}</p>
                    <p>{{ $t('Exploring Gothenburg paragraph-2') }}</p>
                    <p>{{ $t('Exploring Gothenburg paragraph-3') }}</p>
                    <p>{{ $t('Exploring Gothenburg paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('4. Must-See Museums in Stockholm') }}</h1>
                    <p>{{ $t('Must-See Museums in Stockholm paragraph-1') }}</p>
                    <p>{{ $t('Must-See Museums in Stockholm paragraph-2') }}</p>
                    <p>{{ $t('Must-See Museums in Stockholm paragraph-3') }}</p>
                    <p>{{ $t('Must-See Museums in Stockholm paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('5. Best Hiking Trails in Swedish Lapland') }}</h1>
                    <p>{{ $t('Best Hiking Trails in Swedish Lapland paragraph-1') }}</p>
                    <p>{{ $t('Best Hiking Trails in Swedish Lapland paragraph-2') }}</p>
                    <p>{{ $t('Best Hiking Trails in Swedish Lapland paragraph-3') }}</p>
                    <p>{{ $t('Best Hiking Trails in Swedish Lapland paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('6. A Food Lover’s Guide to Swedish Cuisine') }}</h1>
                    <p>{{ $t('A Food Lover’s Guide to Swedish Cuisine paragraph-1') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Swedish Cuisine paragraph-2') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Swedish Cuisine paragraph-3') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Swedish Cuisine paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('7. Winter Activities in Sweden: Embrace the Cold') }}</h1>
                    <p>{{ $t('Winter Activities in Sweden paragraph-1') }}</p>
                    <p>{{ $t('Winter Activities in Sweden paragraph-2') }}</p>
                    <p>{{ $t('Winter Activities in Sweden paragraph-3') }}</p>
                    <p>{{ $t('Winter Activities in Sweden paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('8. Cultural Etiquette and Customs in Sweden') }}</h1>
                    <p>{{ $t('Cultural Etiquette and Customs in Sweden paragraph-1') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Sweden paragraph-2') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Sweden paragraph-3') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Sweden paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('9. Discovering the Archipelago: A Day Trip from Stockholm') }}</h1>
                    <p>{{ $t('Discovering the Archipelago paragraph-1') }}</p>
                    <p>{{ $t('Discovering the Archipelago paragraph-2') }}</p>
                    <p>{{ $t('Discovering the Archipelago paragraph-3') }}</p>
                    <p>{{ $t('Discovering the Archipelago paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('10. Exploring Sweden by Train: Scenic Routes and Tips') }}</h1>
                    <p>{{ $t('Exploring Sweden by Train paragraph-1') }}</p>
                    <p>{{ $t('Exploring Sweden by Train paragraph-2') }}</p>
                    <p>{{ $t('Exploring Sweden by Train paragraph-3') }}</p>
                    <p>{{ $t('Exploring Sweden by Train paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('11. Sustainable Travel Practices in Sweden') }}</h1>
                    <p>{{ $t('Sustainable Travel Practices in Sweden paragraph-1') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Sweden paragraph-2') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Sweden paragraph-3') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Sweden paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('12. A Guide to Swedish Festivals and Events') }}</h1>
                    <p>{{ $t('A Guide to Swedish Festivals and Events paragraph-1') }}</p>
                    <p>{{ $t('A Guide to Swedish Festivals and Events paragraph-2') }}</p>
                    <p>{{ $t('A Guide to Swedish Festivals and Events paragraph-3') }}</p>
                    <p>{{ $t('A Guide to Swedish Festivals and Events paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('13. Shopping in Sweden: Best Places and Local Crafts') }}</h1>
                    <p>{{ $t('Shopping in Sweden paragraph-1') }}</p>
                    <p>{{ $t('Shopping in Sweden paragraph-2') }}</p>
                    <p>{{ $t('Shopping in Sweden paragraph-3') }}</p>
                    <p>{{ $t('Shopping in Sweden paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('14. Exploring Sweden’s National Parks: Nature’s Paradise') }}</h1>
                    <p>{{ $t('Exploring Sweden’s National Parks paragraph-1') }}</p>
                    <p>{{ $t('Exploring Sweden’s National Parks paragraph-2') }}</p>
                    <p>{{ $t('Exploring Sweden’s National Parks paragraph-3') }}</p>
                    <p>{{ $t('Exploring Sweden’s National Parks paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('15. A Cultural Guide to Sweden’s Historic Churches') }}</h1>
                    <p>{{ $t('A Cultural Guide to Sweden’s Historic Churches paragraph-1') }}</p>
                    <p>{{ $t('A Cultural Guide to Sweden’s Historic Churches paragraph-2') }}</p>
                    <p>{{ $t('A Cultural Guide to Sweden’s Historic Churches paragraph-3') }}</p>
                    <p>{{ $t('A Cultural Guide to Sweden’s Historic Churches paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('16. How to Experience Swedish Fika: A Cultural Tradition') }}</h1>
                    <p>{{ $t('How to Experience Swedish Fika paragraph-1') }}</p>
                    <p>{{ $t('How to Experience Swedish Fika paragraph-2') }}</p>
                    <p>{{ $t('How to Experience Swedish Fika paragraph-3') }}</p>
                    <p>{{ $t('How to Experience Swedish Fika paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('17. A Family-Friendly Guide to Stockholm') }}</h1>
                    <p>{{ $t('A Family-Friendly Guide to Stockholm paragraph-1') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Stockholm paragraph-2') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Stockholm paragraph-3') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Stockholm paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('18. Exploring Sweden’s Coastal Towns and Islands') }}</h1>
                    <p>{{ $t('Exploring Sweden’s Coastal Towns and Islands paragraph-1') }}</p>
                    <p>{{ $t('Exploring Sweden’s Coastal Towns and Islands paragraph-2') }}</p>
                    <p>{{ $t('Exploring Sweden’s Coastal Towns and Islands paragraph-3') }}</p>
                    <p>{{ $t('Exploring Sweden’s Coastal Towns and Islands paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('19. An Insider’s Guide to Stockholm’s Nightlife') }}</h1>
                    <p>{{ $t('An Insider’s Guide to Stockholm’s Nightlife paragraph-1') }}</p>
                    <p>{{ $t('An Insider’s Guide to Stockholm’s Nightlife paragraph-2') }}</p>
                    <p>{{ $t('An Insider’s Guide to Stockholm’s Nightlife paragraph-3') }}</p>
                    <p>{{ $t('An Insider’s Guide to Stockholm’s Nightlife paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('20. A Seasonal Guide to Sweden: What to Expect Year-Round') }}</h1>
                    <p>{{ $t('A Seasonal Guide to Sweden paragraph-1') }}</p>
                    <p>{{ $t('A Seasonal Guide to Sweden paragraph-2') }}</p>
                    <p>{{ $t('A Seasonal Guide to Sweden paragraph-3') }}</p>
                    <p>{{ $t('A Seasonal Guide to Sweden paragraph-4') }}</p>
                </div>

            </div>

        </section>

        <section id="finland">
            <div class="heading">
                <h1>{{ $t('Travel Guides and Best Practices for Finland') }}</h1>
                <div class="image">
                    <img src="@/assets/Helsinki.webp" alt="finland">
                </div>
            </div>

            <div class="flex">
                <div class="card">
                    <h1>{{ $t('1. Essential Travel Tips for Visiting Finland') }}</h1>
                    <p>{{ $t('Essential Travel Tips for Visiting Finland paragraph-1') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Finland paragraph-2') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Finland paragraph-3') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Finland paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('2. Navigating Helsinki’s Public Transportation System') }}</h1>
                    <p>{{ $t('Navigating Helsinki’s Public Transportation System paragraph-1') }}</p>
                    <p>{{ $t('Navigating Helsinki’s Public Transportation System paragraph-2') }}</p>
                    <p>{{ $t('Navigating Helsinki’s Public Transportation System paragraph-3') }}</p>
                    <p>{{ $t('Navigating Helsinki’s Public Transportation System paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('3. Exploring Turku: Top Tips for First-Time Visitors') }}</h1>
                    <p>{{ $t('Exploring Turku paragraph-1') }}</p>
                    <p>{{ $t('Exploring Turku paragraph-2') }}</p>
                    <p>{{ $t('Exploring Turku paragraph-3') }}</p>
                    <p>{{ $t('Exploring Turku paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('4. Must-See Museums in Helsinki') }}</h1>
                    <p>{{ $t('Must-See Museums in Helsinki paragraph-1') }}</p>
                    <p>{{ $t('Must-See Museums in Helsinki paragraph-2') }}</p>
                    <p>{{ $t('Must-See Museums in Helsinki paragraph-3') }}</p>
                    <p>{{ $t('Must-See Museums in Helsinki paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('5. Best Hiking Trails in Finnish Lapland') }}</h1>
                    <p>{{ $t('Best Hiking Trails in Finnish Lapland paragraph-1') }}</p>
                    <p>{{ $t('Best Hiking Trails in Finnish Lapland paragraph-2') }}</p>
                    <p>{{ $t('Best Hiking Trails in Finnish Lapland paragraph-3') }}</p>
                    <p>{{ $t('Best Hiking Trails in Finnish Lapland paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('6. A Food Lover’s Guide to Finnish Cuisine') }}</h1>
                    <p>{{ $t('A Food Lover’s Guide to Finnish Cuisine paragraph-1') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Finnish Cuisine paragraph-2') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Finnish Cuisine paragraph-3') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Finnish Cuisine paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('7. Winter Activities in Finland: Embrace the Cold') }}</h1>
                    <p>{{ $t('Winter Activities in Finland paragraph-1') }}</p>
                    <p>{{ $t('Winter Activities in Finland paragraph-2') }}</p>
                    <p>{{ $t('Winter Activities in Finland paragraph-3') }}</p>
                    <p>{{ $t('Winter Activities in Finland paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('8. Cultural Etiquette and Customs in Finland') }}</h1>
                    <p>{{ $t('Cultural Etiquette and Customs in Finland paragraph-1') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Finland paragraph-2') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Finland paragraph-3') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Finland paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('9. Discovering the Åland Islands: A Maritime Paradise') }}</h1>
                    <p>{{ $t('Discovering the Åland Islands paragraph-1') }}</p>
                    <p>{{ $t('Discovering the Åland Islands paragraph-2') }}</p>
                    <p>{{ $t('Discovering the Åland Islands paragraph-3') }}</p>
                    <p>{{ $t('Discovering the Åland Islands paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('10. Exploring Finland by Train: Scenic Routes and Tips') }}</h1>
                    <p>{{ $t('Exploring Finland by Train paragraph-1') }}</p>
                    <p>{{ $t('Exploring Finland by Train paragraph-2') }}</p>
                    <p>{{ $t('Exploring Finland by Train paragraph-3') }}</p>
                    <p>{{ $t('Exploring Finland by Train paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('11. Sustainable Travel Practices in Finland') }}</h1>
                    <p>{{ $t('Sustainable Travel Practices in Finland paragraph-1') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Finland paragraph-2') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Finland paragraph-3') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Finland paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('12. A Guide to Finnish Festivals and Events') }}</h1>
                    <p>{{ $t('A Guide to Finnish Festivals and Events paragraph-1') }}</p>
                    <p>{{ $t('A Guide to Finnish Festivals and Events paragraph-2') }}</p>
                    <p>{{ $t('A Guide to Finnish Festivals and Events paragraph-3') }}</p>
                    <p>{{ $t('A Guide to Finnish Festivals and Events paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('13. Shopping in Finland: Best Places and Local Crafts') }}</h1>
                    <p>{{ $t('Shopping in Finland paragraph-1') }}</p>
                    <p>{{ $t('Shopping in Finland paragraph-2') }}</p>
                    <p>{{ $t('Shopping in Finland paragraph-3') }}</p>
                    <p>{{ $t('Shopping in Finland paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('14. Exploring Finland’s National Parks: Nature’s Paradise') }}</h1>
                    <p>{{ $t('Exploring Finland’s National Parks paragraph-1') }}</p>
                    <p>{{ $t('Exploring Finland’s National Parks paragraph-2') }}</p>
                    <p>{{ $t('Exploring Finland’s National Parks paragraph-3') }}</p>
                    <p>{{ $t('Exploring Finland’s National Parks paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('15. A Cultural Guide to Finland’s Historic Churches') }}</h1>
                    <p>{{ $t('A Cultural Guide to Finland’s Historic Churches paragraph-1') }}</p>
                    <p>{{ $t('A Cultural Guide to Finland’s Historic Churches paragraph-2') }}</p>
                    <p>{{ $t('A Cultural Guide to Finland’s Historic Churches paragraph-3') }}</p>
                    <p>{{ $t('A Cultural Guide to Finland’s Historic Churches paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('16. How to Experience Finnish Sauna Culture') }}</h1>
                    <p>{{ $t('How to Experience Finnish Sauna Culture paragraph-1') }}</p>
                    <p>{{ $t('How to Experience Finnish Sauna Culture paragraph-2') }}</p>
                    <p>{{ $t('How to Experience Finnish Sauna Culture paragraph-3') }}</p>
                    <p>{{ $t('How to Experience Finnish Sauna Culture paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('17. A Family-Friendly Guide to Helsinki') }}</h1>
                    <p>{{ $t('A Family-Friendly Guide to Helsinki paragraph-1') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Helsinki paragraph-2') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Helsinki paragraph-3') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Helsinki paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('18. Exploring Finland’s Coastal Towns and Islands') }}</h1>
                    <p>{{ $t('Exploring Finland’s Coastal Towns and Islands paragraph-1') }}</p>
                    <p>{{ $t('Exploring Finland’s Coastal Towns and Islands paragraph-2') }}</p>
                    <p>{{ $t('Exploring Finland’s Coastal Towns and Islands paragraph-3') }}</p>
                    <p>{{ $t('Exploring Finland’s Coastal Towns and Islands paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('19. An Insider’s Guide to Helsinki’s Nightlife') }}</h1>
                    <p>{{ $t('An Insider’s Guide to Helsinki’s Nightlife paragraph-1') }}</p>
                    <p>{{ $t('An Insider’s Guide to Helsinki’s Nightlife paragraph-2') }}</p>
                    <p>{{ $t('An Insider’s Guide to Helsinki’s Nightlife paragraph-3') }}</p>
                    <p>{{ $t('An Insider’s Guide to Helsinki’s Nightlife paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('20. A Seasonal Guide to Finland: What to Expect Year-Round') }}</h1>
                    <p>{{ $t('A Seasonal Guide to Finland paragraph-1') }}</p>
                    <p>{{ $t('A Seasonal Guide to Finland paragraph-2') }}</p>
                    <p>{{ $t('A Seasonal Guide to Finland paragraph-3') }}</p>
                    <p>{{ $t('A Seasonal Guide to Finland paragraph-4') }}</p>
                </div>
            </div>
        </section>

        <section id="denmark">
            <div class="heading">
                <h1>{{ $t('Travel Guides and Best Practices for Denmark') }}</h1>
                <div class="image">
                    <img src="@/assets/Copenhagen.jpg" alt="denmark">
                </div>
            </div>

            <div class="flex">

                <div class="card">
                    <h1>{{ $t('1. Essential Travel Tips for Visiting Denmark') }}</h1>
                    <p>{{ $t('Essential Travel Tips for Visiting Denmark paragraph-1') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Denmark paragraph-2') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Denmark paragraph-3') }}</p>
                    <p>{{ $t('Essential Travel Tips for Visiting Denmark paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('2. Navigating Copenhagen’s Public Transportation System') }}</h1>
                    <p>{{ $t('Navigating Copenhagen’s Public Transportation System paragraph-1') }}</p>
                    <p>{{ $t('Navigating Copenhagen’s Public Transportation System paragraph-2') }}</p>
                    <p>{{ $t('Navigating Copenhagen’s Public Transportation System paragraph-3') }}</p>
                    <p>{{ $t('Navigating Copenhagen’s Public Transportation System paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('3. Exploring Aarhus: Top Tips for First-Time Visitors') }}</h1>
                    <p>{{ $t('Exploring Aarhus paragraph-1') }}</p>
                    <p>{{ $t('Exploring Aarhus paragraph-2') }}</p>
                    <p>{{ $t('Exploring Aarhus paragraph-3') }}</p>
                    <p>{{ $t('Exploring Aarhus paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('4. Must-See Museums in Copenhagen') }}</h1>
                    <p>{{ $t('Must-See Museums in Copenhagen paragraph-1') }}</p>
                    <p>{{ $t('Must-See Museums in Copenhagen paragraph-2') }}</p>
                    <p>{{ $t('Must-See Museums in Copenhagen paragraph-3') }}</p>
                    <p>{{ $t('Must-See Museums in Copenhagen paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('5. Best Hiking Trails in Denmark') }}</h1>
                    <p>{{ $t('Best Hiking Trails in Denmark paragraph-1') }}</p>
                    <p>{{ $t('Best Hiking Trails in Denmark paragraph-2') }}</p>
                    <p>{{ $t('Best Hiking Trails in Denmark paragraph-3') }}</p>
                    <p>{{ $t('Best Hiking Trails in Denmark paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('6. A Food Lover’s Guide to Danish Cuisine') }}</h1>
                    <p>{{ $t('A Food Lover’s Guide to Danish Cuisine paragraph-1') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Danish Cuisine paragraph-2') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Danish Cuisine paragraph-3') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Danish Cuisine paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('7. Winter Activities in Denmark: Embrace the Cold') }}</h1>
                    <p>{{ $t('Winter Activities in Denmark paragraph-1') }}</p>
                    <p>{{ $t('Winter Activities in Denmark paragraph-2') }}</p>
                    <p>{{ $t('Winter Activities in Denmark paragraph-3') }}</p>
                    <p>{{ $t('Winter Activities in Denmark paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('8. Cultural Etiquette and Customs in Denmark') }}</h1>
                    <p>{{ $t('Cultural Etiquette and Customs in Denmark paragraph-1') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Denmark paragraph-2') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Denmark paragraph-3') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Denmark paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('9. Discovering the Danish Riviera: Coastal Beauty') }}</h1>
                    <p>{{ $t('Discovering the Danish Riviera paragraph-1') }}</p>
                    <p>{{ $t('Discovering the Danish Riviera paragraph-2') }}</p>
                    <p>{{ $t('Discovering the Danish Riviera paragraph-3') }}</p>
                    <p>{{ $t('Discovering the Danish Riviera paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('10. Exploring Denmark by Train: Scenic Routes and Tips') }}</h1>
                    <p>{{ $t('Exploring Denmark by Train paragraph-1') }}</p>
                    <p>{{ $t('Exploring Denmark by Train paragraph-2') }}</p>
                    <p>{{ $t('Exploring Denmark by Train paragraph-3') }}</p>
                    <p>{{ $t('Exploring Denmark by Train paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('11. Sustainable Travel Practices in Denmark') }}</h1>
                    <p>{{ $t('Sustainable Travel Practices in Denmark paragraph-1') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Denmark paragraph-2') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Denmark paragraph-3') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Denmark paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('12. A Guide to Danish Festivals and Events') }}</h1>
                    <p>{{ $t('A Guide to Danish Festivals and Events paragraph-1') }}</p>
                    <p>{{ $t('A Guide to Danish Festivals and Events paragraph-2') }}</p>
                    <p>{{ $t('A Guide to Danish Festivals and Events paragraph-3') }}</p>
                    <p>{{ $t('A Guide to Danish Festivals and Events paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('13. Shopping in Denmark: Best Places and Local Crafts') }}</h1>
                    <p>{{ $t('Shopping in Denmark paragraph-1') }}</p>
                    <p>{{ $t('Shopping in Denmark paragraph-2') }}</p>
                    <p>{{ $t('Shopping in Denmark paragraph-3') }}</p>
                    <p>{{ $t('Shopping in Denmark paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('14. Exploring Denmark’s National Parks: Nature’s Paradise') }}</h1>
                    <p>{{ $t('Exploring Denmark’s National Parks paragraph-1') }}</p>
                    <p>{{ $t('Exploring Denmark’s National Parks paragraph-2') }}</p>
                    <p>{{ $t('Exploring Denmark’s National Parks paragraph-3') }}</p>
                    <p>{{ $t('Exploring Denmark’s National Parks paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('15. A Cultural Guide to Denmark’s Historic Churches') }}</h1>
                    <p>{{ $t('A Cultural Guide to Denmark’s Historic Churches paragraph-1') }}</p>
                    <p>{{ $t('A Cultural Guide to Denmark’s Historic Churches paragraph-2') }}</p>
                    <p>{{ $t('A Cultural Guide to Denmark’s Historic Churches paragraph-3') }}</p>
                    <p>{{ $t('A Cultural Guide to Denmark’s Historic Churches paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('16. How to Experience Danish Hygge Culture') }}</h1>
                    <p>{{ $t('How to Experience Danish Hygge Culture paragraph-1') }}</p>
                    <p>{{ $t('How to Experience Danish Hygge Culture paragraph-2') }}</p>
                    <p>{{ $t('How to Experience Danish Hygge Culture paragraph-3') }}</p>
                    <p>{{ $t('How to Experience Danish Hygge Culture paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('17. A Family-Friendly Guide to Copenhagen') }}</h1>
                    <p>{{ $t('A Family-Friendly Guide to Copenhagen paragraph-1') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Copenhagen paragraph-2') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Copenhagen paragraph-3') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Copenhagen paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('18. Exploring Denmark’s Coastal Towns and Islands') }}</h1>
                    <p>{{ $t('Exploring Denmark’s Coastal Towns and Islands paragraph-1') }}</p>
                    <p>{{ $t('Exploring Denmark’s Coastal Towns and Islands paragraph-2') }}</p>
                    <p>{{ $t('Exploring Denmark’s Coastal Towns and Islands paragraph-3') }}</p>
                    <p>{{ $t('Exploring Denmark’s Coastal Towns and Islands paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('19. An Insider’s Guide to Copenhagen’s Nightlife') }}</h1>
                    <p>{{ $t('An Insider’s Guide to Copenhagen’s Nightlife paragraph-1') }}</p>
                    <p>{{ $t('An Insider’s Guide to Copenhagen’s Nightlife paragraph-2') }}</p>
                    <p>{{ $t('An Insider’s Guide to Copenhagen’s Nightlife paragraph-3') }}</p>
                    <p>{{ $t('An Insider’s Guide to Copenhagen’s Nightlife paragraph-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('20. A Seasonal Guide to Denmark: What to Expect Year-Round') }}</h1>
                    <p>{{ $t('A Seasonal Guide to Denmark paragraph-1') }}</p>
                    <p>{{ $t('A Seasonal Guide to Denmark paragraph-2') }}</p>
                    <p>{{ $t('A Seasonal Guide to Denmark paragraph-3') }}</p>
                    <p>{{ $t('A Seasonal Guide to Denmark paragraph-4') }}</p>
                </div>

            </div>
        </section>

        <section id="norway">

            <div class="heading">
                <h1>{{ $t('Travel Guides and Best Practices for Norway') }}</h1>
                <div class="image">
                    <img src="@/assets/norway.jpg" alt="sweden">
                </div>
            </div>

            <div class="flex">
                <div class="card">
                    <h1>{{ $t('1. Best Hiking Trails in Norwegian Fjords') }}</h1>
                    <p>{{ $t('Best Hiking Trails in Norwegian Fjords paragraph-1') }}</p>
                    <p>{{ $t('Best Hiking Trails in Norwegian Fjords paragraph-2') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('2. A Food Lover’s Guide to Norwegian Cuisine') }}</h1>
                    <p>{{ $t('A Food Lover’s Guide to Norwegian Cuisine paragraph-1') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Norwegian Cuisine paragraph-2') }}</p>
                    <p>{{ $t('A Food Lover’s Guide to Norwegian Cuisine paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('3. Winter Activities in Norway: Embrace the Cold') }}</h1>
                    <p>{{ $t('Winter Activities in Norway paragraph-1') }}</p>
                    <p>{{ $t('Winter Activities in Norway paragraph-2') }}</p>
                    <p>{{ $t('Winter Activities in Norway paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('4. Cultural Etiquette and Customs in Norway') }}</h1>
                    <p>{{ $t('Cultural Etiquette and Customs in Norway paragraph-1') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Norway paragraph-2') }}</p>
                    <p>{{ $t('Cultural Etiquette and Customs in Norway paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('5. Discovering the Lofoten Islands: A Scenic Adventure') }}</h1>
                    <p>{{ $t('Discovering the Lofoten Islands paragraph-1') }}</p>
                    <p>{{ $t('Discovering the Lofoten Islands paragraph-2') }}</p>
                    <p>{{ $t('Discovering the Lofoten Islands paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('6. Exploring Norway by Train: Scenic Routes and Tips') }}</h1>
                    <p>{{ $t('Exploring Norway by Train paragraph-1') }}</p>
                    <p>{{ $t('Exploring Norway by Train paragraph-2') }}</p>
                    <p>{{ $t('Exploring Norway by Train paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('7. Sustainable Travel Practices in Norway') }}</h1>
                    <p>{{ $t('Sustainable Travel Practices in Norway paragraph-1') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Norway paragraph-2') }}</p>
                    <p>{{ $t('Sustainable Travel Practices in Norway paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('8. A Guide to Norwegian Festivals and Events') }}</h1>
                    <p>{{ $t('A Guide to Norwegian Festivals and Events paragraph-1') }}</p>
                    <p>{{ $t('A Guide to Norwegian Festivals and Events paragraph-2') }}</p>
                    <p>{{ $t('A Guide to Norwegian Festivals and Events paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('9. Shopping in Norway: Best Places and Local Crafts') }}</h1>
                    <p>{{ $t('Shopping in Norway paragraph-1') }}</p>
                    <p>{{ $t('Shopping in Norway paragraph-2') }}</p>
                    <p>{{ $t('Shopping in Norway paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('10. Exploring Norway’s National Parks: Nature’s Paradise') }}</h1>
                    <p>{{ $t('Exploring Norway’s National Parks paragraph-1') }}</p>
                    <p>{{ $t('Exploring Norway’s National Parks paragraph-2') }}</p>
                    <p>{{ $t('Exploring Norway’s National Parks paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('11. A Cultural Guide to Norway’s Historic Churches') }}</h1>
                    <p>{{ $t('A Cultural Guide to Norway’s Historic Churches paragraph-1') }}</p>
                    <p>{{ $t('A Cultural Guide to Norway’s Historic Churches paragraph-2') }}</p>
                    <p>{{ $t('A Cultural Guide to Norway’s Historic Churches paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('12. How to Experience Norwegian Sauna Culture') }}</h1>
                    <p>{{ $t('How to Experience Norwegian Sauna Culture paragraph-1') }}</p>
                    <p>{{ $t('How to Experience Norwegian Sauna Culture paragraph-2') }}</p>
                    <p>{{ $t('How to Experience Norwegian Sauna Culture paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('13. A Family-Friendly Guide to Oslo') }}</h1>
                    <p>{{ $t('A Family-Friendly Guide to Oslo paragraph-1') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Oslo paragraph-2') }}</p>
                    <p>{{ $t('A Family-Friendly Guide to Oslo paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('14. Exploring Norway’s Coastal Towns and Islands') }}</h1>
                    <p>{{ $t('Exploring Norway’s Coastal Towns and Islands paragraph-1') }}</p>
                    <p>{{ $t('Exploring Norway’s Coastal Towns and Islands paragraph-2') }}</p>
                    <p>{{ $t('Exploring Norway’s Coastal Towns and Islands paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('15. An Insider’s Guide to Oslo’s Nightlife') }}</h1>
                    <p>{{ $t('An Insider’s Guide to Oslo’s Nightlife paragraph-1') }}</p>
                    <p>{{ $t('An Insider’s Guide to Oslo’s Nightlife paragraph-2') }}</p>
                    <p>{{ $t('An Insider’s Guide to Oslo’s Nightlife paragraph-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('16. A Seasonal Guide to Norway: What to Expect Year-Round') }}</h1>
                    <p>{{ $t('A Seasonal Guide to Norway paragraph-1') }}</p>
                    <p>{{ $t('A Seasonal Guide to Norway paragraph-2') }}</p>
                    <p>{{ $t('A Seasonal Guide to Norway paragraph-3') }}</p>
                </div>
            </div>

        </section>

    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 'sweden'
        }
    },
    methods: {
        toggle(curr) {
            if (this.current !== curr) {
                this.current = curr;
            }
        }
    },
    watch: {
        current(oldV, newV) {
            this.$refs[oldV].classList.toggle('active')
            this.$refs[newV].classList.toggle('active')
        }
    }
}
</script>
<style scoped>
.holder {
    position: relative;
    padding: 2rem 0;
}

.buttons {
    display: flex;
    flex-direction: column;
    background-color: rgba(20, 43, 51, 0.8);
    position: fixed;
    right: 5px;
    border-radius: 1rem;
    padding: 1em;
    gap: 1em;
    top: 100px;
}

.buttons .link {
    color: var(--white);
    font-size: 1em;
    text-transform: uppercase;
}

.buttons .link.active {
    color: var(--green);
}

.heading h1 {
    font-size: 2rem;
}

.heading .image {
    width: 700px;
    margin: 0 auto;
}

.heading .image img {
    aspect-ratio: 12/8;
    border-radius: 2rem;
    margin-bottom: 1em;
}

.how-to-text {
    font-size: 1.7rem;
    letter-spacing: 3px;
    font-weight: 400;
    margin: 2rem auto;
}

h1 {
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 3px;
    margin: 2rem auto;
}

.heading {
    padding: 2em;
}

.flex {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    text-align: left;
}

.flex .card p {
    margin: 1em 0;
    font-size: 1rem;
}

.image {
    width: 65%;
    margin: 0 auto;
}

@media (max-width: 800px) {
    .heading .image {
        width: 70vw;
        margin: 0 auto;
    }

    .heading {
        padding: 1em;
    }
}

@media screen and (max-width: 500px) {
    .buttons {
        background-color: rgba(20, 43, 51, 0.6);
        border-radius: 0.5rem;
        padding: 1em;
        gap: 1em;
        top: auto;
        bottom: 30px;
        right: 5px;
    }

    .buttons .link {
        font-size: 0.8em;
    }

    h1 {
        font-size: 1.1rem;
    }

    p {
        font-size: 0.8rem;
    }

    .heading h1 {
        font-size: 1.7rem;
    }
}
</style>