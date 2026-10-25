// Las secciones vienen del prototipo de Claude Design y usan React y sus componentes como globales.
// Este archivo se importa primero para que existan antes de cargar esos módulos.
import React from "react";
import ReactDOM from "react-dom/client";
import backend from "./lib/backend.js";
import "./lib/sesiones.js";
import "./resources.js";

window.React = React;
window.ReactDOM = ReactDOM;
window.EZBackend = backend;
