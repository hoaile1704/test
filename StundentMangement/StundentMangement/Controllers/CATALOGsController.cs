using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using StundentMangement.Models;
using StundentMangement.ViewModels;

namespace StundentMangement.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CATALOGsController : ApiController
    {
        private StudentManagementEntities db = new StudentManagementEntities();

        // GET: api/CATALOGs
        public IQueryable<CusCatalog> GetCATALOGs()
        {
            return  from c in db.CATALOGs
                    join y1 in db.YEARs on c.YEAR_START_ID equals y1.YEAR_ID
                    join y2 in db.YEARs on c.YEAR_END_ID equals y2.YEAR_ID
                    select new CusCatalog()
                    {
                        id = c.CATA_ID,
                        startYear = y1.YEAR1,
                        endYear = y2.YEAR1,
                        note = c.NOTE,
                        status = c.STATUS

                    };
           
        }

        // GET: api/CATALOGs/5
        [ResponseType(typeof(CATALOG))]
        public IHttpActionResult GetCATALOG(int id)
        {
            CATALOG cATALOG = db.CATALOGs.Find(id);
            if (cATALOG == null)
            {
                return NotFound();
            }

            return Ok(cATALOG);
        }

        // PUT: api/CATALOGs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCATALOG(int id, CATALOG cATALOG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cATALOG.CATA_ID)
            {
                return BadRequest();
            }

            db.Entry(cATALOG).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CATALOGExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CATALOGs
        [ResponseType(typeof(CATALOG))]
        public IHttpActionResult PostCATALOG(CATALOG cATALOG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CATALOGs.Add(cATALOG);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cATALOG.CATA_ID }, cATALOG);
        }

        // DELETE: api/CATALOGs/5
        [ResponseType(typeof(CATALOG))]
        public IHttpActionResult DeleteCATALOG(int id)
        {
            CATALOG cATALOG = db.CATALOGs.Find(id);
            if (cATALOG == null)
            {
                return NotFound();
            }

            db.CATALOGs.Remove(cATALOG);
            db.SaveChanges();

            return Ok(cATALOG);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CATALOGExists(int id)
        {
            return db.CATALOGs.Count(e => e.CATA_ID == id) > 0;
        }
    }
}