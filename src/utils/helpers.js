import React from "react";

export const Loader = () => {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
}

export const dataMock = [
{
    "id":782299,
    "id_page":258355,
    "number":1,
    "type":0,
    "date_created":"2011-07-14 22:24:46",
    "date_modified":"2011-12-29 18:04:24",
    "text":"Jednokrotne",
    "desc":"",
    "required":1,
    "answers_count":3,
    "options":{
    "shuffle_answers":false,
    "horizontal_display":false
    },
    "answers":[
    {
        "text":"tak",
        "custom_response_available":false,
        "id": 0
    },
    {
        "text":"nie",
        "custom_response_available":false,
        "id": 1
    },
    {
        "text":"inne",
        "custom_response_available":true,
        "id": 2
    }
    ]
},
{
    "id":782300,
    "id_page":258355,
    "number":2,
    "type":6,
    "date_created":"2011-07-14 22:24:58",
    "date_modified":"2011-12-29 18:04:13",
    "text":"Wielokrotne",
    "desc":"",
    "required":1,
    "answers_count":4,
    "options":{
    "min":2,
    "max":2,
    "shuffle_answers":false,
    "horizontal_display":false
    },
    "answers":[
    {
        "text":"tak",
        "custom_response_available":false,
        "id": 3
    },
    {
        "text":"nie",
        "custom_response_available":false,
        "id": 4
    },
    {
        "text":"mo\u017ce",
        "custom_response_available":false,
        "id": 5
    },
    {
        "text":"inne",
        "custom_response_available":true,
        "id": 6
    }
    ]
}];