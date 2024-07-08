// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

const BooleanIcon: React.FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M8.7,2.77H5.89v8.39H4.23V2.77H1.42V1.36H8.7Z" />
            <path d="M22,14.05H18.34V17H21.7v1.4H18.34v4.09H16.68V12.64H22Z" />
            <rect x="0.74" y="11.45" width="22.63" height="1" transform="translate(-4.92 12.02) rotate(-45)" />
        </SvgIcon>
    );
};

const StringIcon: React.FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M1,18.55l3.67-9.8H6.57l3.64,9.8H8.38L7.56,16.2H3.64l-.8,2.35Zm3.05-3.71h3L5.77,11c0-.1-.06-.21-.09-.31s0-.23-.07-.38h0c0,.13-.05.25-.07.36L5.41,11Z" />
            <path d="M10.62,10.7V.9h3.17a3.66,3.66,0,0,1,2.26.61,2,2,0,0,1,.81,1.7,2.28,2.28,0,0,1-.45,1.41,2.39,2.39,0,0,1-1.23.85v0a2.43,2.43,0,0,1,1.55.75,2.24,2.24,0,0,1,.58,1.59,2.55,2.55,0,0,1-.94,2.08,3.67,3.67,0,0,1-2.45.78Zm1.66-8.47V5h1.09a1.91,1.91,0,0,0,1.28-.4,1.34,1.34,0,0,0,.47-1.09,1.14,1.14,0,0,0-.44-1,2.17,2.17,0,0,0-1.31-.32Zm0,4.11v3h1.39A2.08,2.08,0,0,0,15.06,9a1.44,1.44,0,0,0,.5-1.15A1.26,1.26,0,0,0,15,6.72a2.48,2.48,0,0,0-1.49-.38Z" />
            <path d="M22.39,21.52a6.46,6.46,0,0,1-1.45.51,6.72,6.72,0,0,1-1.53.16,4.72,4.72,0,0,1-3.54-1.31,5,5,0,0,1-1.27-3.61A5.16,5.16,0,0,1,16,13.51a4.9,4.9,0,0,1,3.69-1.45,7.28,7.28,0,0,1,1.37.12,6.54,6.54,0,0,1,1.26.4l-.55,1.36a4.91,4.91,0,0,0-2.05-.42,3.23,3.23,0,0,0-2.42,1,3.65,3.65,0,0,0-.95,2.67,3.7,3.7,0,0,0,.87,2.6,3,3,0,0,0,2.35,1,4.65,4.65,0,0,0,2.16-.56Z" />
        </SvgIcon>
    );
};

const NumericalIcon: React.FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M6.5,19.05H4.88v-8a4.23,4.23,0,0,1-.87.48,7.43,7.43,0,0,1-1.07.4l-.45-1.35A9.4,9.4,0,0,0,4.21,10,8.16,8.16,0,0,0,5.65,9H6.5Z" />
            <path d="M9.55,11.62V11a3.59,3.59,0,0,1,.2-1.22,3.46,3.46,0,0,1,.54-1,4.79,4.79,0,0,1,.83-.86c.32-.26.67-.54,1.06-.82A7.58,7.58,0,0,0,13,6.47a5.14,5.14,0,0,0,.56-.62,1.88,1.88,0,0,0,.34-.62A2.55,2.55,0,0,0,14,4.49a1.51,1.51,0,0,0-.4-1.09A1.44,1.44,0,0,0,12.5,3a2.94,2.94,0,0,0-1.12.24A3.57,3.57,0,0,0,10.26,4L9.37,3a5.14,5.14,0,0,1,1.54-1,4.91,4.91,0,0,1,1.79-.32,2.89,2.89,0,0,1,2.17.79,2.54,2.54,0,0,1,.78,1.86,3.63,3.63,0,0,1-.18,1.21,3.59,3.59,0,0,1-.48.91,4.68,4.68,0,0,1-.74.81,10.42,10.42,0,0,1-.93.74l-.9.64a4.37,4.37,0,0,0-.62.55,2.29,2.29,0,0,0-.37.52,1.3,1.3,0,0,0-.12.55h4.52v1.39Z" />
            <path d="M16.39,21.48l.7-1.11a4.36,4.36,0,0,0,1,.5,3.6,3.6,0,0,0,1.08.16,2,2,0,0,0,1.43-.46,1.49,1.49,0,0,0,.46-1.12,1.44,1.44,0,0,0-.63-1.28,3.25,3.25,0,0,0-1.81-.42h-.81V16.46h.75a2.84,2.84,0,0,0,1.64-.39,1.41,1.41,0,0,0,.54-1.24,1.28,1.28,0,0,0-.39-1,1.5,1.5,0,0,0-1-.34,3,3,0,0,0-1,.17,4.17,4.17,0,0,0-1,.51l-.7-1.07A5.05,5.05,0,0,1,18,12.41a4.9,4.9,0,0,1,1.52-.22,3.12,3.12,0,0,1,2.07.66,2.18,2.18,0,0,1,.8,1.76A2.42,2.42,0,0,1,22,16.12a2.56,2.56,0,0,1-1.36.9v0a2.53,2.53,0,0,1,1.54.77,2.16,2.16,0,0,1,.6,1.56,2.69,2.69,0,0,1-.93,2.14,3.62,3.62,0,0,1-2.47.8,5.44,5.44,0,0,1-1.55-.2A5.64,5.64,0,0,1,16.39,21.48Z" />
        </SvgIcon>
    );
};

const DateIcon: React.FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M18,3.5v-1H17v1H7v-1H6v1H2.5v17h19V3.5Zm2.5,16H3.5V8.5h17Zm0-12H3.5v-3H6v1H7v-1H17v1h1v-1h2.5Z" />
            <rect x="9.17" y="9.68" width="2" height="2" />
            <rect x="12.83" y="9.68" width="2" height="2" />
            <rect x="16.5" y="9.68" width="2" height="2" />
            <rect x="5.5" y="13" width="2" height="2" />
            <rect x="9.17" y="13" width="2" height="2" />
            <rect x="12.83" y="13" width="2" height="2" />
            <rect x="16.5" y="13" width="2" height="2" />
            <rect x="5.5" y="16.32" width="2" height="2" />
            <rect x="9.17" y="16.32" width="2" height="2" />
        </SvgIcon>
    );
};

const UnknownIcon: React.FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M10.22,15.43c-.07-.18-.12-.42-.17-.71-.05-.29-.08-.58-.08-.86,0-.44,.09-.84,.27-1.2,.18-.36,.4-.69,.66-1.01s.55-.61,.86-.9c.31-.29,.59-.57,.86-.85s.49-.57,.66-.87,.27-.64,.27-1c0-.33-.07-.61-.2-.85-.13-.24-.31-.45-.54-.61s-.49-.29-.78-.36c-.29-.08-.61-.12-.94-.12-1.08,0-2.11,.48-3.09,1.45v-2.51c1.19-.7,2.42-1.04,3.7-1.04,.59,0,1.14,.08,1.66,.23s.98,.38,1.37,.67c.39,.3,.7,.67,.92,1.11,.22,.44,.34,.96,.34,1.54s-.09,1.06-.28,1.49-.43,.84-.71,1.2-.59,.69-.92,.97c-.33,.28-.64,.57-.92,.85-.29,.28-.52,.58-.71,.88-.19,.3-.28,.64-.28,1.01,0,.31,.04,.59,.12,.85,.08,.25,.16,.47,.24,.64h-2.29Zm1.24,4.6c-.41,0-.78-.14-1.1-.42-.3-.28-.46-.62-.46-1.02s.15-.75,.46-1.02c.31-.29,.68-.43,1.1-.43s.78,.15,1.09,.43c.3,.27,.46,.61,.46,1.02s-.15,.75-.46,1.02c-.32,.28-.68,.42-1.09,.42Z" />
        </SvgIcon>
    );
};

export { BooleanIcon, NumericalIcon, StringIcon, DateIcon, UnknownIcon };