<script>
    export let textoBoton = '', fullWidth = false
</script>

<button class={`${fullWidth ? 'full': ''}`}>
    <div class="icono">
        {textoBoton}
        <div>
            <slot />
        </div>
    </div>
</button>
<style>
    button{
        border: none;
        padding: 8px 12px;
        border-radius: 8px;
        display: flex;
        font-weight: 700;
        transition: all .3s ease-in-out;
        background-color: rgb(57, 116, 236);
        color: rgb(246, 242, 242);        
    }

    .full{
        width: 100%;
    }

    .icono{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    button:hover{
        background-color: rgb(104, 143, 221);
        /* color: rgb(56, 55, 55); */
    }
</style>