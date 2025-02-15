

export default function CertificationInput(){
    return (
        <div id="eduForm-certificates" className="mb-2">
          
          <div className="my-2 flex flex-col">
            <input
              type="text"
              placeholder="Name of the Certificate"
              className="rounded-md w-72 h-8 mb-2"
            />
            <input
              type="text"
              placeholder="Awarding Organisation"
              className="rounded-md w-72 h-8 mb-2"
            />
            <span className="text-white"> Date</span>
            <input
              type="date"
              name="startDate"
              placeholder="Date"
              className="rounded-md w-72 h-8 mb-2"
            />
          </div>
        </div>
    );
}