import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import MaterialDatatable from "material-datatable";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)

  },
  delete: {
    backgroundColor: "red"
  }

}));

export default function Libro() {
  const classes = useStyles();

  const { register, handleSubmit, errors, getValues, setValue, reset } = useForm(
    { defaultValues: {} });

  const [contador, setContador] = useState(0)
  const [libro, setLibro] = useState([])
  const [persona, setPersona] = useState([])
  const [prestamo, setPrestamo] = useState([])

  const [accion, setAccion] = useState("Guardar")
  const [idLibro, setIdLibro] = useState(null);
  const [idPersona, setIdPersona] = useState(null);
  const [fecha, setFecha ] = useState(Date);

  useEffect(() => {
    cargarLibro();
    cargarPersona();
    setValue("fecha",fecha);
  }, []);

  const seleccionar = (item) => {
    setValue("nombrel", item.nombre)
    setIdLibro(item._id)
    // setAccion("Modificar")
  }
  const seleccionar2 = (item) => {
    setValue("nombrep", item.nombre+' '+item.apellido)
    //setValue("nombrep", item._id)
    setIdPersona(item._id)
    setFecha(Date)
    console.log(fecha);
    // setAccion("Modificar")
  }


  const columns = [
    {
      name: "Seleccionar",
      options: {
        headerNoWrap: true,
        customBodyRender: (item, tablemeta, update) => {
          return (
            <Button
              variant="contained"
              className="btn-block"
              onClick={() => seleccionar(item)}
            >
              Seleccionar
            </Button>
          );
        },
      },
    },
    // {
    //   name: 'Codigo',
    //   field: 'codigo'
    // },
    {
      name: 'Nombre',
      field: 'nombre'
    }
    
  ];
  const columns2 = [
    {
      name: "Seleccionar",
      options: {
        headerNoWrap: true,
        customBodyRender: (item, tablemeta, update) => {
          return (
            <Button
              variant="contained"
              className="btn-block"
              onClick={() => seleccionar2(item)}
            >
              Seleccionar
            </Button>
          );
        },
      },
    },
    // {
    //   name: 'Codigo',
    //   field: 'codigo'
    // },
    {
      name: 'Nombre',
      field: 'nombre'
    },
    {
        name: 'Apellido',
        field: 'apellido'
    }
    
  ];

  


  const options = {
    selectableRows: false,
    print: false,
    onlyOneRowCanBeSelected: false,
    textLabels: {
      body: {
        noMatch: "Lo sentimos, no se encuentran registros",
        toolTip: "Sort",
      },
      pagination: {
        next: "Siguiente",
        previous: "Página Anterior",
        rowsPerPage: "Filas por página:",
        displayRows: "de",
      },
    },
    download: false,
    pagination: true,
    rowsPerPage: 5,
    usePaperPlaceholder: true,
    rowsPerPageOptions: [5, 10, 25],
    sortColumnDirection: "desc",
  }
  const onSubmit = data => {

    if (accion == "Guardar") {
      data.idPersona = idPersona;
      data.libro = idLibro;
      axios
        .post("http://localhost:9000/api/prestamo", data, {
          headers: {
            Accept: '*/*'
          }
        })
        .then(
          (response) => {
            if (response.status == 200) {
              alert("Registro ok")              
            //   cargarLibro();
            //   cargarPersona();
            //   setIdLibro(idLibro)
            //   setIdPersona(idPersona)
              setAccion("Guardar")
              console.log(response.data)
              reset();
            }
          },
          (error) => {
            // Swal.fire(
            //   "Error",
            //   "No es posible realizar esta acción: " + error.message,
            //   "error"
            // );
          }
        )
        .catch((error) => {
          // Swal.fire(
          //   "Error",
          //   "No cuenta con los permisos suficientes para realizar esta acción",
          //   "error"
          // );
          console.log(error);
        });
    }
  
  }
  const cargarLibro = async () => {
    // const { data } = await axios.get('/api/zona/listar');

    const { data } = await axios.get("http://localhost:9000/api/libroautor");
    setLibro(data.libroConAutor);


  };
  const cargarPersona = async () => {
    // const { data } = await axios.get('/api/zona/listar');

    const { data } = await axios.get("http://localhost:9000/api/personas");
    setPersona(data.persona);
  };

  const cargarPrestamo = async () => {
    // const { data } = await axios.get('/api/zona/listar');

    const { data } = await axios.get("http://localhost:9000/api/prestamo");
    setPrestamo(data.resultado);
  };

  function click2() {
    setContador(contador + 1);
  }
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Button
          type="button"
          fullWidth
          variant="contained"

          className={classes.submit}
          onClick={() => { reset(); setAccion("Guardar"); setIdLibro(idLibro); setIdPersona(idPersona); setFecha(fecha)}}
        >
          Nuevo
          </Button>
        <Typography component="h1" variant="h5">
          Prestamo
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nombrep"
                label="Nombre Persona"
                name="nombrep"
                autoComplete="lname"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nombrel"
                variant="outlined"
                required
                fullWidth            
                label="Nombre Libro"
                autoFocus
                inputRef={register}
              />
            </Grid>
           
            

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {accion}
          </Button>
          {/* <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.delete}
            onClick={() => { eliminar() }}
          >
            Eliminar
          </Button> */}
          <Grid container spacing ={6}>
          <Grid item  sm={6} >
            <MaterialDatatable

              title={"Libros"}
              data={libro}
              columns={columns}
              options={options}
            />
          </Grid>
          <Grid item  sm={6} >
            <MaterialDatatable
              title={"Persona"}
              data={persona}
              columns={columns2}
              options={options}
            />
          </Grid>
          
          </Grid>

        </form>
        


      </div>

    </Container>
  );
}