import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import styled from "styled-components";
import { useBrands, setBrands, brands } from "./Components/Hooks/useBrands.js";
import {
    useBrandApi,
    setBrandApi,
    brandApi,
} from "./Components/Hooks/useBrandApi.js";
export default function BrandList() {
    const [activ, setActiv] = useState();
    const { setBrands, brands } = useBrands();
    const { setBrandApi, brandApi } = useBrandApi();
    useEffect(() => {
        axios
            .get("https://api.mediehuset.net/stringsonline/brands")
            .then((response) => {
                for (const parent of response.data.items) {
                    parent.slug = slugify(parent.title, {
                        strict: true,
                        lower: true,
                        locale: "da",
                    });
                }
                setBrands(response.data.items);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
      <StyledApp>
            <ul>
                {brands.map((item, idx) => {
                  return (
                    <li
                            onClick={() => setActiv(item.title)}
                            className={activ === item.title ? "active" : ""}
                            key={idx}
                            >
                            <Link
                                onClick={() => setBrandApi(item.request.url)}
                                to={`${item.slug}`}
                                >
                                {item.title}
                            </Link>
                            {activ === item.title ? (
                              <ul>
                                    {brands.map((item, idx) => {
                                      return <li key={idx}>{item.title}</li>;
                                    })}
                                </ul>
                            ) : null}
                        </li>
                    );
                  })}
            </ul>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    .active {
      color: red;
    }
`;
