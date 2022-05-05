
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { GiDiamondRing } from 'react-icons/gi';
import { FaBaby , FaPortrait} from 'react-icons/fa';

function Offer() {
    return (
    <CardGroup>
            <Card className="border-0 text-center">
              <Card.Body>
                <Card.Subtitle><GiDiamondRing color="#B2954E" size="3em"/></Card.Subtitle>
                <Card.Title className="my-3" as="h4">Hochzeit</Card.Title>
                <Card.Text className="font-weight-bold font-italic">
                Ich begleite eure Hochzeit ganz nach euren Wünschen und Vorstellungen und fange dabei die schönsten Momente und Emotionen fotografisch ein.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 text-center">
              <Card.Body>
                <Card.Subtitle><FaBaby color="#B2954E" size="3em"/></Card.Subtitle>
                <Card.Title className="my-3" as="h4">Babies & Bellys</Card.Title>
                <Card.Text>
                Individuell angepasst an deine Vorstellungen halte ich im letzten Drittel deiner Schwangerschaft deinen Babybauch fotografisch fest. Euren neuen Familienzuwachs fotografiere ich gern bei euch in vertrauter Atmosphäre in Form eines Einzel-, Familien- oder Geschwistershootings.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 text-center">
              <Card.Body>
                <Card.Subtitle><FaPortrait color="#B2954E" size="3em"/></Card.Subtitle>
                <Card.Title className="my-3" as="h4">Portrait</Card.Title>
                <Card.Text>
                Maßgeschneidert nach deinen Wünschen mache ich ausdrucksstarke Studioportraits, ob als Beautyportraits, Fotos deiner Familie oder Businessportraits. 
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          );
    }

export default Offer;