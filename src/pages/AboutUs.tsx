// src/pages/AboutUs.tsx
import { useState, useEffect } from 'react';
import { db } from '../firebase'; // Импортируем конфигурацию Firebase

import { collection, getDocs } from 'firebase/firestore';
import styled from 'styled-components';

// import { useQuery } from "@tanstack/react-query";

const AboutSection = styled.section`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.boxBackground}; // Используем новый цвет темы
  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  margin-top: 20px;
`;

const formatDate = (timestamp: any) => {
    if (!timestamp || !timestamp.seconds) return "Неизвестно";
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("et-EE"); // Преобразуем в читаемый формат
  };

const AboutUs = () => {
  const [aboutData, setAboutData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Функция для получения данных из Firebase
    const fetchAboutData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'aboutUs'));
        const data = querySnapshot.docs.map(doc => doc.data());
        setAboutData(data[0]); // Предполагаем, что у нас только одна запись
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    
      <h1>Meist</h1>
        <section>
            <h2>{aboutData?.title}</h2>
            <p>{aboutData?.description}</p>
        </section>
    

    <AboutSection>    
        <h2>Üldandmed</h2>
        <section>  
            <p><strong>Õiguslik vorm:</strong> {aboutData?.legalForm}</p>
            <p><strong>Registrikood:</strong> {aboutData?.registrationCode}</p>
            <p><strong>Registreerimise kuupäev:</strong>{" "}
            {formatDate(aboutData?.registrationDate)}</p>
            <p><strong>Tegevusvaldkond:</strong> {aboutData?.businessActivity}</p>
            <p><strong>Aadress:</strong> {aboutData?.address}</p>
        </section>

    </AboutSection>

    <AboutSection>
        <h2>Kontaktandmed</h2>
        <section>
            <p>
                <strong>Telefon: </strong> 
                <a href={`tel:${aboutData?.phone}`}>{aboutData?.phone}</a>
            </p>
            <p>
                <strong>E-post: </strong> 
                <a href={`mailto:${aboutData?.email}`}>{aboutData?.email}</a>
            </p>
        </section>
    </AboutSection>

    <AboutSection>
        <h2>Esindajad</h2>
        <section>
            {aboutData?.representatives?.map((person, index) => (
                <p key={index}>
                    {person.name} ({person.birthDate}) – {person.position} (alates {person.startDate})
                </p>
            ))}
        </section>
    </AboutSection>
    </>
  );
};

export default AboutUs;