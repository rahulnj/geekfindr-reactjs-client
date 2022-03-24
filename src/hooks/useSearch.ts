import axios from "axios";
import { useEffect, useRef, useState } from "react";
import request from "../api";
import { UserData } from "../models";





export const useSearch = () => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const InitialUpdate = useRef(true);

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    useEffect(() => {
        if (InitialUpdate.current) {
            InitialUpdate.current = false;
            return;
        }
        const CancelToken = axios.CancelToken.source()
        const fetchUsers = async () => {
            try {
                const { data } = await request.get(`/api/v1/profiles?searchUserName=${wordEntered}`, {
                    cancelToken: CancelToken.token,
                    headers: {
                        'Authorization': `Bearer ${CurrentUser?.token}`,
                    },
                })
                setFilteredData(data)
            } catch (err) {
                if (axios.isCancel(Error)) {
                    return;
                }
            }
        }
        fetchUsers()
        return () => {
            CancelToken.cancel()
        }
    }, [wordEntered])

    return { filteredData, setFilteredData, wordEntered, setWordEntered }
}