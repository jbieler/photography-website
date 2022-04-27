
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { GiDiamondRing } from 'react-icons/gi';
import { FaBaby , FaPortrait} from 'react-icons/fa';
import {VscPerson} from 'react-icons/vsc';

function Offer() {
    return (
    <CardGroup>
            <Card className="border-0 text-center">
              <Card.Body>
                <Card.Subtitle><GiDiamondRing color="#B2954E" size="3em"/></Card.Subtitle>
                <Card.Title className="my-3" as="h4">Hochzeit</Card.Title>
                <Card.Text className="font-weight-bold font-italic">
                  Fotografische Begleitung Ihrer Hochzeit, damit Sie Ihren schönsten Tag immer wieder erleben können.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 text-center">
              <Card.Body>
                <Card.Subtitle><FaBaby color="#B2954E" size="3em"/></Card.Subtitle>
                <Card.Title className="my-3" as="h4">Babies & Bellys</Card.Title>
                <Card.Text>
                  Halten Sie mit einem Babybauch oder Babyshooting diese besondere Zeit für immer fest.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 text-center">
              <Card.Body>
                <Card.Subtitle><FaPortrait color="#B2954E" size="3em"/></Card.Subtitle>
                <Card.Title className="my-3" as="h4">Portrait</Card.Title>
                <Card.Text>
                  Maßgeschneiderte Portraitfotos nach Ihren Vorstellungen.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          );
    }

export default Offer;