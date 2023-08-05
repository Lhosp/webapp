import { createTheme } from "@mui/material";


export const maintheme2 = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // Rouge
    },
    secondary: {
      main: '#ffffff', // Vert vif
    },
    background: {
      default: '#ffffff', // Blanc
      paper: '#fffff', // Gris clair
    },
  },
});


export const secondarytheme = createTheme({
    palette: {
        primary: {
          main: '#E1306C', // Couleur principale pour les éléments de la palette
        },
        secondary: {
          main: '#262626', // Couleur secondaire pour les éléments de la palette
        },
        error: {
          main: '#ED4956', // Couleur d'erreur
        },
        warning: {
          main: '#FBBB00', // Couleur d'avertissement
        },
        info: {
          main: '#3897F0', // Couleur d'information
        },
        success: {
          main: '#55BF37', // Couleur de réussite
        },
        mode: 'light', // Mode du thème (light ou dark)
        tonalOffset: 0.2, // Décalage tonal pour les nuances de couleur
        contrastThreshold: 3, // Seuil de contraste pour déterminer la couleur du texte
        // Vous pouvez spécifier d'autres propriétés de la palette selon vos besoins
      },
});
// Création du thème Slack
export const maintheme = createTheme({
  palette: {
    primary: {
      main: '#4A154B', // Couleur principale pour les éléments de la palette
    },
    secondary: {
      main: '#36C5F0', // Couleur secondaire pour les éléments de la palette
    },
    error: {
      main: '#D30230', // Couleur d'erreur
    },
    warning: {
      main: '#FFCC00', // Couleur d'avertissement
    },
    info: {
      main: '#764FA5', // Couleur d'information
    },
    success: {
      main: '#2ECC71', // Couleur de réussite
    },
    mode: 'light', // Mode du thème (light ou dark)
    tonalOffset: 0.2, // Décalage tonal pour les nuances de couleur
    contrastThreshold: 3, // Seuil de contraste pour déterminer la couleur du texte
    // Vous pouvez spécifier d'autres propriétés de la palette selon vos besoins
  },
  // Spécification d'autres propriétés pour le thème Slack
});


