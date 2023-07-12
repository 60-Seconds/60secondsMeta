import { useSetRecoilState } from "recoil";
import { Victim } from "../stores/Victim/victim.store";
import axios from "axios";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export var target;
export const useGetVictim = () => {
    const setVictimName = useSetRecoilState(Victim);
    useGLTF.preload('/chast.gltf');
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get('http://52.79.56.93/v2/victim/getList?disaster=1');
          target = data.data;
          console.log(data.data[0].name);
          setVictimName(data.data[0].name + " (" + (data.data[0].gender == 'M' ? "남" : "여") + ") " + data.data[0].age);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  }