﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.CHernyjj1412
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [PublishName("Сотрудники1")]
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "Id as \'Id\'",
            "Фио as \'Фио\'",
            "ДолжностиЛо as \'Должности ло\'",
            "ДолжностиЛо.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "ДолжностиЛо.Наименование"})]
    [MasterViewDefineAttribute("СотрудникиE", "ДолжностиЛо", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("СотрудникиL", new string[] {
            "Id as \'Id\'",
            "Фио as \'ФИО\'",
            "ДолжностиЛо.Наименование as \'Наименование\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private int fId;
        
        private string fФио;
        
        private IIS.CHernyjj1412.ДолжностиЛо fДолжностиЛо;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// Id.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Id CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Id CustomAttributes)
        public virtual int Id
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Id Get start)

                // *** End programmer edit section *** (Сотрудники.Id Get start)
                int result = this.fId;
                // *** Start programmer edit section *** (Сотрудники.Id Get end)

                // *** End programmer edit section *** (Сотрудники.Id Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Id Set start)

                // *** End programmer edit section *** (Сотрудники.Id Set start)
                this.fId = value;
                // *** Start programmer edit section *** (Сотрудники.Id Set end)

                // *** End programmer edit section *** (Сотрудники.Id Set end)
            }
        }
        
        /// <summary>
        /// Фио.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Фио CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Фио CustomAttributes)
        [StrLen(255)]
        public virtual string Фио
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Фио Get start)

                // *** End programmer edit section *** (Сотрудники.Фио Get start)
                string result = this.fФио;
                // *** Start programmer edit section *** (Сотрудники.Фио Get end)

                // *** End programmer edit section *** (Сотрудники.Фио Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Фио Set start)

                // *** End programmer edit section *** (Сотрудники.Фио Set start)
                this.fФио = value;
                // *** Start programmer edit section *** (Сотрудники.Фио Set end)

                // *** End programmer edit section *** (Сотрудники.Фио Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ДолжностиЛо CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ДолжностиЛо CustomAttributes)
        [PropertyStorage(new string[] {
                "ДолжностиЛо"})]
        [NotNull()]
        public virtual IIS.CHernyjj1412.ДолжностиЛо ДолжностиЛо
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ДолжностиЛо Get start)

                // *** End programmer edit section *** (Сотрудники.ДолжностиЛо Get start)
                IIS.CHernyjj1412.ДолжностиЛо result = this.fДолжностиЛо;
                // *** Start programmer edit section *** (Сотрудники.ДолжностиЛо Get end)

                // *** End programmer edit section *** (Сотрудники.ДолжностиЛо Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ДолжностиЛо Set start)

                // *** End programmer edit section *** (Сотрудники.ДолжностиЛо Set start)
                this.fДолжностиЛо = value;
                // *** Start programmer edit section *** (Сотрудники.ДолжностиЛо Set end)

                // *** End programmer edit section *** (Сотрудники.ДолжностиЛо Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.CHernyjj1412.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.CHernyjj1412.Сотрудники));
                }
            }
        }
    }
}
