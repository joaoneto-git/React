import languages from './../../../languages.json'
function SectionContatct(props){
    const content = languages.portugues;
    return <>
        <section className="mb-8 p-10">
            <h2 className="text-3xl font-bold mb-4">Informações de Contato</h2>
            <p><strong>{content.name}:</strong> {props.name}</p>
            <p><strong>{content.email}:</strong> {props.email}</p>
            <p><strong>{content.phone}:</strong> <a href={`http:///api.whatsapp.com/send?phone=${props.phone.normalize('NFD').replace(/[^0-9]/g,'')}`} target="_blank">{props.phone}</a></p>
            <p><strong>LinkedIn:</strong> <a href={`http://${props.linkedin}`} target="_blank" rel="noopener noreferrer">{props.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href={`http://${props.github}`} target="_blank" rel="noopener noreferrer">{props.github}</a></p>
        </section>
    </>
}

export default SectionContatct;