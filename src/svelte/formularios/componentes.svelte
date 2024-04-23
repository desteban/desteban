<script>
  import Input from "../../components/Inputs/Input.svelte";
  import BotonConImagen from "../Botones/BotonConImagen.svelte";
  import Send from "../Iconos/Send.svelte";
//   import SendSvg from "../../../public/send.svg";

  let nombre = '', correo = '';

  /**
   * @param
   */
    const submit = (event) => {
        event.preventDefault()
    }

    $:{
    }
</script>

<form on:submit={submit}>
    <Input name='Nombre' placeHolder='Nombre Completo' labelTexto='Nombre' bind:value={nombre} />
    <Input name='email' placeHolder='Correo' labelTexto='Correo' bind:value={correo} />

    <BotonConImagen textoBoton='Enviar' fullWidth icono='icon'>
        <Send />
    </BotonConImagen>
</form>

<style>
    form{
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid lightgray;
    }
</style>