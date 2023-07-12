import axios from "axios";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export var target;
export const useGetVictim = () => {
    useGLTF.preload('/chast.gltf');
    useEffect(() => {
      const fetchData = async () => {
        try {
          const disaster = window.location.search.split('=')[1];
          console.log(disaster); 
          const { data } = await axios.get('http://52.79.56.93/v2/victim/getList?disaster=' + disaster);
          target = data.data;
          console.log(data.data[0].name);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  }